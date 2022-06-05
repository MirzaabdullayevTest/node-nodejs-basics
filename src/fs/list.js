import fs from 'fs'
import path from 'path'

const dir = path.dirname('list.js')

export const list = async () => {
    return new Promise((resolve, reject) => {
        fs.access(path.join(dir, 'files'),
            (err) => {
                if (err) throw new Error('FS operation failed')
            });


        fs.readdir(path.join(dir, 'files'), (err, files) => {
            if (err) reject(err)
            else {
                console.log(files);
                resolve()
            }
        })
    })
};