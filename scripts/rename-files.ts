import * as fs from 'fs'
import * as path from 'path'

// Configuration
const FOLDER_PATH = path.join(__dirname, '../', 'projects/ngx-suite-common/components')
const OLD_PREFIX = 'epic-'
const NEW_PREFIX = 'ns-'

interface RenameResult {
    oldPath: string
    newPath: string
    success: boolean
}

/**
 * Recursively find all files in a directory
 */
function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
    const files = fs.readdirSync(dirPath)

    files.forEach((file) => {
        const filePath = path.join(dirPath, file)
    
        if (fs.statSync(filePath).isDirectory()) {
            arrayOfFiles = getAllFiles(filePath, arrayOfFiles)
        }
        else {
            arrayOfFiles.push(filePath)
        }
    })

    return arrayOfFiles
}

/**
 * Rename files with old prefix to new prefix
 */
function renameFiles(): RenameResult[] {
    console.log('Starting file rename process...')
    console.log(`Folder: ${FOLDER_PATH}`)
    console.log(`Replacing: ${OLD_PREFIX} -> ${NEW_PREFIX}\n`)

    const allFiles = getAllFiles(FOLDER_PATH)
    const filesToRename = allFiles.filter(file => 
        path.basename(file).includes(OLD_PREFIX),
    )

    if (filesToRename.length === 0) {
        console.log('No files found with the old prefix.')
        return []
    }

    console.log(`Found ${filesToRename.length} file(s) to rename:\n`)

    const results: RenameResult[] = []

    filesToRename.forEach((oldPath) => {
        const dir = path.dirname(oldPath)
        const oldFilename = path.basename(oldPath)
        const newFilename = oldFilename.replace(new RegExp(OLD_PREFIX, 'g'), NEW_PREFIX)
        const newPath = path.join(dir, newFilename)

        if (oldPath !== newPath) {
            try {
                console.log(`Renaming: ${oldFilename} → ${newFilename}`)
                fs.renameSync(oldPath, newPath)
                results.push({ oldPath, newPath, success: true })
            }
            catch (error) {
                console.error(`Failed to rename ${oldFilename}:`, error)
                results.push({ oldPath, newPath, success: false })
            }
        }
    })

    console.log('\n✓ File rename completed!')
    return results
}

// Execute
try {
    renameFiles()
}
catch (error) {
    console.error('Error:', error instanceof Error ? error.message : error)
    process.exit(1)
}
