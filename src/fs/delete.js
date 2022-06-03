import fs from 'fs'
import path from 'path'

const dir = path.dirname('delete.js')

export const remove = async () => {
    return new Promise((resolve, reject) => {
        fs.stat(
            path.join(dir, 'files', 'fileToRemove.txt'),
            (err) => {
                if (err) throw new Error('FS operation failed')
            })

        fs.unlink(
            path.join(dir, 'files', 'fileToRemove.txt'),
            (err) => {
                if (err) reject(err)
                else resolve()
            })
    })
};