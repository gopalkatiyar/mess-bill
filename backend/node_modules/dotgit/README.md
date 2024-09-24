# DotGit (.git)

A simple git repository utility.

## Install

```sh
npm install dotgit --save-dev
```

## Usage

```ts
import git from 'dotgit';

console.log(git.branch); // master
console.log(git.head); // c5275e52a7871f6d2fec5b27506d337c6939ffad
console.log(git.short); // c5275e5
```

## License

MIT License.
