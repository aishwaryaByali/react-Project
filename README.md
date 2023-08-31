# Namaste React

# .gitignore

- anything which can be regenerated, should not be pushed to github
- eg., dist, .parcel-cache, node_modules

# npx parcel build index.html

- it is to build bundle for production. remove "main": "App.js", from package.json, because the starting point is already given in the command (index.html)

# parcel

- Dev build
- Local Server
- HMR -> Hot Module Replacement
- File Watching Algorithm - written in C++
- faster development experience - using caching
- Image Optimization
- Minification
- Bundle all the files
- Compress the files
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older bundling
- Error Handling
- Https
- Tree shaking - remove unused code
- Different dev and prod bundles
