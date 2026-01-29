import { Observable } from 'rxjs'
import { filter, switchMap, take } from 'rxjs/operators'


export type NsProcessingState = {
    processing: boolean
    processingError: Error | null
}

export function getInitNsProcessingState(processing = false, processingError: Error | null = null): NsProcessingState {
    return {
        processing,
        processingError,
    }
}

export function reduceNsProcessingStartAction(state: NsProcessingState): NsProcessingState {
    return {
        ...state,
        processing: true,
        processingError: null,
    }
}

export function reduceNsProcessingFinishAction(state: NsProcessingState, error: null | Error = null): NsProcessingState {
    return {
        ...state,
        processing: false,
        processingError: error,
    }
}

export function selectNsProcessingHasError(state: NsProcessingState): boolean {
    return state.processingError !== null
}

export type NsProcessingEvents<TState> = {
    processingStart$: Observable<TState>
    processingEnd$: Observable<TState>
    success$: Observable<TState>
    error$: Observable<TState>
}

export function createNsProcessingEvents<TState>(
    state$: Observable<TState>,
    selectEventProcessingStateFn: (state: TState) => NsProcessingState): NsProcessingEvents<TState> {

    const processingStart$ = state$
        .pipe(
            filter(state => selectEventProcessingStateFn(state).processing),
        )

    const processingEnd$ = processingStart$
        .pipe(
            switchMap(() =>
                state$
                    .pipe(
                        filter(state => !selectEventProcessingStateFn(state).processing),
                        take(1),
                    ),
            ),
        )

    const success$ = processingEnd$
        .pipe(
            filter(state => selectEventProcessingStateFn(state).processingError === null),
        )

    const error$ = processingEnd$
        .pipe(
            filter(state => selectEventProcessingStateFn(state).processingError !== null),
        )

    return {
        processingStart$,
        processingEnd$,
        success$,
        error$,
    }
}
