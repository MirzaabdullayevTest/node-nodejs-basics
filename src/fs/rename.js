import fs from 'fs'
import path from 'path'

const dir = path.dirname('rename.js')

export const rename = async () => {
    return new Promise((resolve, reject) => {
        fs.stat(
            path.join(dir, 'files', 'wrongFilename.txt'),
            (err) => {
                if (err) throw new Error('FS operation failed')
            })

        fs.stat(
            path.join(dir, 'files', 'properFilename.md'),
            (err) => {
                if (!err) throw new Error('FS operation failed')
            })

        fs.rename(
            path.join(dir, 'files', 'wrongFilename.txt'),
            path.join(dir, 'files', 'properFilename.md'),
            (err) => {
                if (err) reject(err)
                else resolve()
            })
    })
};