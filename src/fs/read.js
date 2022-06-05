import fs from 'fs'
import path from 'path'

const dir = path.dirname('read.js')


export const read = async () => {
    return new Promise((resolve, reject) => {
        fs.stat(
            path.join(dir, 'files', 'fileToRead.txt'),
            (err) => {
                if (err) throw new Error('FS operation failed')
            })

        fs.readFile(
            path.join(dir, 'files', 'fileToRead.txt'),
            'utf-8',
            (err, data) => {
                if (err) reject(err)
                else {
                    console.log(data);
                    resolve()
                }
            })

    })
};

await read()