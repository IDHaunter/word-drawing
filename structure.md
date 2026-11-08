# word-drawing

## 1. Directory tree

```text
word-drawing/
├── dist/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── DrawingCanvas.tsx
│   │   ├── DrawingScreen.tsx
│   │   ├── GuessingScreen.tsx
│   │   ├── ResultsScreen.tsx
│   │   └── StartScreen.tsx
│   ├── data/
│   │   └── words.json
│   ├── game/
│   │   ├── answerChecker.ts
│   │   ├── config.ts
│   │   ├── scoring.ts
│   │   ├── types.ts
│   │   └── wordGenerator.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 2. Files and contents

### `dist/index.html`

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#15172b" />
    <meta
      name="description"
      content="A quick memory game: draw words in four seconds, then try to remember them."
    />
    <title>Draw &amp; Recall</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### `index.html`

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#15172b" />
    <meta
      name="description"
      content="A quick memory game: draw words in four seconds, then try to remember them."
    />
    <title>Draw &amp; Recall</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### `package-lock.json`

```
{
  "name": "word-drawing-game",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "word-drawing-game",
      "version": "1.0.0",
      "dependencies": {
        "react": "^19.3.1",
        "react-dom": "^19.3.1"
      },
      "devDependencies": {
        "@types/react": "^19.3.0",
        "@types/react-dom": "^19.3.0",
        "@vitejs/plugin-react": "^6.2.1",
        "typescript": "^5.9.3",
        "vite": "^8.3.6"
      }
    },
    "node_modules/@oxc-project/types": {
      "version": "0.156.0",
      "resolved": "https://registry.npmjs.org/@oxc-project/types/-/types-0.156.0.tgz",
      "integrity": "sha512-1Duyg48TdJNdyhEB8Xn1L36bT9Pv6GUtlKjHxOys8xkaF/rQq3XJE+bAurSK/AgIz5mGFsb77cn9Pb20+WCScw==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/oxc-project"
      }
    },
    "node_modules/@rolldown/binding-android-arm-eabi": {
      "version": "1.2.16",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm-eabi/-/binding-android-arm-eabi-1.2.16.tgz",
      "integrity": "sha512-ia3DwAs0OsMGS7+IConptSiyk9pEXkOx/AbJ2n/lAGxH3QkWQus1t8d7gnAT38FCU2sQu8lUbeR6AiZFv4JxaA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-android-arm64": {
      "version": "1.2.16",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm64/-/binding-android-arm64-1.2.16.tgz",
      "integrity": "sha512-kx5wBiMB6E7TEvpl2B9gjLU004BkvEm2Dr941BFjx/SontPwSzNuQUIoVKxHHoSjpFIfHMmcguyLOtyn0hObRg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-arm64": {
      "version": "1.2.16",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-arm64/-/binding-darwin-arm64-1.2.16.tgz",
      "integrity": "sha512-qslZrXnKJU4cUpjoAmtAo/KQM9e2IRMlmpig6Zpwj+8KWxW8v+nkAf9216Bsek9lOC1jvg2yCjygCFo2f83msQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-x64": {
      "version": "1.2.16",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-x64/-/binding-darwin-x64-1.2.16.tgz",
      "integrity": "sha512-FdF+y48ND13eAyM2mQn+85kvAqNlvRWROy2rhgA463X/0Gv4vGtazZtfaF1mRBLscYvtOlh4QnLjOWiFzX69OQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-freebsd-x64": {
      "version": "1.2.16",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-freebsd-x64/-/binding-freebsd-x64-1.2.16.tgz",
      "integrity": "sha512-ddjqFM5e95AgLbUPtKIS7V1KTVlA0RUgCVr5mn+/IEhsdy3pr+Vuj/HZ7nlMN2FyxIwUktOH1LEPIQXO1v9y1Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm-gnueabihf": {
      "version": "1.2.16",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.2.16.tgz",
      "integrity": "sha512-tHdKWbFkFBI687iim3LIyIvyL7j66VvQYkDPss5Stn/qyE2tWkR1YD0dXmXPFKKqT/o5ZEJVsaRsWS2meQwGOA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-gnu": {
      "version": "1.2.16",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.2.16.tgz",
      "integrity": "sha512-FJiLGAblPBMlBEdbOqw6kW6QcXDWAf/oJu7gYs9ZJZwmg+K+/zjFLxPTIY9izJUzxzc24FHvmseyA0IvJSl17w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-musl": {
      "version": "1.2.16",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.2.16.tgz",
      "integrity": "sha512-hrJpblMsrQ58U9veWpbXzkhV5zStunds6HWLprqq1qauvgBr1E6P+24kLj6lSLI9vjRn/RYpjprhkHQPKGWpNg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-ppc64-gnu": {
      "version": "1.2.16",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-ppc64-gnu/-/binding-linux-ppc64-gnu-1.2.16.tgz",
      "integrity": "sha512-qJd/dC6j6CwLG9/s/RP2nb1RZ0GIgj7Ioj7x/SYa3RzjVrlzrmH0fhIOpfvqQDeIsdP0loi+kHaMhJzY1PBIaA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-s390x-gnu": {
      "version": "1.2.16",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-s390x-gnu/-/binding-linux-s390x-gnu-1.2.16.tgz",
      "integrity": "sha512-Vx7Xg5uUJuNcujJjI70OICaH0EYj80BtOLZTSN7uOYg8QOLlyKnaG0IW7Fn/J0IpJsaKzmDKMhOQv1JBM9m9vg==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-gnu": {
      "version": "1.2.16",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.2.16.tgz",
      "integrity": "sha512-TNKhgE3uJTsTzatUSSYt0Kgo+Oa2uSlSjz4r1aEIea7HX6ULBym4fAlYUhG1i6pjNf2njfCUAfKwr6C3E9Xg1w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-musl": {
      "version": "1.2.16",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-musl/-/binding-linux-x64-musl-1.2.16.tgz",
      "integrity": "sha512-7chXdpjXZ8qG0+mIxECN3cT9kvhZ3/oZhMX6Pp876P7CDrIy8nJswva6Mq357JR7eYXfuskwZxMeV1SzoZdHrA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-openharmony-arm64": {
      "version": "1.2.16",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-openharmony-arm64/-/binding-openharmony-arm64-1.2.16.tgz",
      "integrity": "sha512-Kwjt+7uNTJK5/MDkGWGVO2KQPnj8yAV75dMpfwyHZrJSXWHrniOB0aUEWlVYf3H1hOqFLIStLdM5QXq6bnKmOQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-arm64-msvc": {
      "version": "1.2.16",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.2.16.tgz",
      "integrity": "sha512-/LH6WfjDRXXJz/p5xl4TmU+jpcnwcxbKEQBW/GZE0JHfN0lGIyTtsUEGaQ/q/GikkGJ2yLKe6pwm7AnEWO8pdw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-x64-msvc": {
      "version": "1.2.16",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.2.16.tgz",
      "integrity": "sha512-1lv1KvX0Z871zfk7vw+dnXMMnHNyDwMzWG8Kv3HxDXMOhzCX4SHc7HK319fInP0i+0p9D8brkfzL7pJOaGl+tw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.1.tgz",
      "integrity": "sha512-2j9bGt5Jh8hj+vPtgzPtl72j0yRxHAyumoo6TNfAjsLB04UtpSvPbPcDcBMxz7n+9CYB0c1GxQFxYRg2jimqGw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/react": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.3.0.tgz",
      "integrity": "sha512-N0rFCuH9YoxG9/m61l9MfpJKfmLOVU0em7ipIz6TRgSSkvReLB9vL85GB+yr8Bs5leqpvg96JSwF4ZS1s4viQg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.3.0.tgz",
      "integrity": "sha512-ZI7bU42mZXXKHn/qNLEw2IrbiINU7X5+vfgdixBHkCNpYWXjKgfQ/P+uyGb5CjOLB9UcnTeg3rylQtV2hym44Q==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.3.0"
      }
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-6.2.1.tgz",
      "integrity": "sha512-9KyWCij3r0+qLG3Q62vBmv0VyevmYibAtxaCIVK9o0k6CXgaajZRIe8tpfchQcdZArJ5b/7OrIz4W3b2uxVRDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rolldown/pluginutils": "^1.0.1"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "@rolldown/plugin-babel": "^0.1.7 || ^0.2.0 || ^0.3.0",
        "babel-plugin-react-compiler": "^1.0.0",
        "oxc-transform-react": ">=0.152.0 <0.157.0",
        "vite": "^8.0.0"
      },
      "peerDependenciesMeta": {
        "@rolldown/plugin-babel": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        },
        "oxc-transform-react": {
          "optional": true
        }
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.33.0.tgz",
      "integrity": "sha512-WkUDrojuJs0xkgGf2udWxa3yGBRxPtxUkB79i6aCZLRgc7PM8fZe9TosfPDcvEpQZbuFASnHYmRLBLUbmLOIIA==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.33.0",
        "lightningcss-darwin-arm64": "1.33.0",
        "lightningcss-darwin-x64": "1.33.0",
        "lightningcss-freebsd-x64": "1.33.0",
        "lightningcss-linux-arm-gnueabihf": "1.33.0",
        "lightningcss-linux-arm64-gnu": "1.33.0",
        "lightningcss-linux-arm64-musl": "1.33.0",
        "lightningcss-linux-x64-gnu": "1.33.0",
        "lightningcss-linux-x64-musl": "1.33.0",
        "lightningcss-win32-arm64-msvc": "1.33.0",
        "lightningcss-win32-x64-msvc": "1.33.0"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.33.0.tgz",
      "integrity": "sha512-gEpRTalKdosp4Bb8qWtc2iOgE5SeIHlpS1up9bFq2wAyYhl1UdTObYiHe98zEM9SQvSoqQZ1IQD0JNpg3Ml5pg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.33.0.tgz",
      "integrity": "sha512-Sciaz8eenNTKn9b3t7+xr0ipTp9YxKQY4npwQ3mrRuL0BAVHBLyZxofhaKBAVtzmtRZ/zTyo0/to4B1uWG/Djg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.33.0.tgz",
      "integrity": "sha512-Z5UPAxzrjlWNNyGy6i65cJzzvgJ5D3T6wMvs+gWpY9d7qRhANrxqAp6LhxIgZhWEw18RfJTGcRxjuLIBr+m8XQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.33.0.tgz",
      "integrity": "sha512-QQM/Ti/hQajJwCY+RiWuCZ9sdtI/XQk7nDK5vC8kkdwixezOlDgvDx7+RT+QjK6FcFT4MpsuoBnHIo/O3StRRg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.33.0.tgz",
      "integrity": "sha512-N7FVBe6iS24MlM6R/4RBTxGhQheZGs7tiQ9U32UtF75NzP5Q7xWPRqLBCKxlRQRk3rY1jCIPLzx7WzOhuUIRLQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.33.0.tgz",
      "integrity": "sha512-j2v/itmy4HlNxlc6voKXYgBqNi0Ng2LShg4z7GufpEgs05P+2suBVyi9I6YHq5uoVFx9ETin3eCEhLVyXGQnKg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.33.0.tgz",
      "integrity": "sha512-yiO5ROMuYQgXbC60yjZU5CYSFZGKXL0HFATXt9mHJn1+zW55oCtMI9NfcVhYLMFDL7gV7oBPon/EmMMGg2OvtQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.33.0.tgz",
      "integrity": "sha512-ar+Ju7LmcN0Jo4FpL4hpFybwNG9/3A/Br5KW2n2jyODg3MEZXaDYADdemoNS+BDNfMgKvylJLj4S5tyRActuAg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.33.0.tgz",
      "integrity": "sha512-RYiYbkokw0trfKqqzfF55lginwEPrD3OJDfTuJzFs1MK6iFnDenaz1fqLLtX4ITG3OktJQXOeTaw1awrBAlZPw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.33.0.tgz",
      "integrity": "sha512-1K+MPfLSFVpphzpdbfkhlWk6wBrTObBzS2T6db10PNOZgR9GoVsAWzwNyuhUYYbTp23j+4RrncfujZ4uAzXvwA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.33.0.tgz",
      "integrity": "sha512-OlEICDx/Xl0FqSp4bry8zFnCvGpig3Gl4gCquvYwHuqJKEC1+n9NgDniFvqHGmMv1ZkqDJrDqKKSykTDX+ehuA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.20",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.20.tgz",
      "integrity": "sha512-uKdg2G3GNCKQn9byYOpxbGqrT2fGO5KRt5J/8b3pok8rT6qxGWF6hxMyJiEYtAf+FVyYuD9hRaDqX5uPFYJ4ZQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.7.tgz",
      "integrity": "sha512-qcJu88Q2IWqJsDD529JKMdwGm/dvInW4HvQnRwiH9JtihJvzGOscDtHE3x1pBKeUOTysQ8kVmLnJ2kJu7yhcGA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.32",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.32.tgz",
      "integrity": "sha512-LJlKCCAUFKOuZxipUdYw1NzIITEsPcgyOG9LkvRJvuKj/bRzbuRY0ARXvL0pWGpsZvn8jku+LMep2eU0seHp8g==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.20",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.2"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/react": {
      "version": "19.3.1",
      "resolved": "https://registry.npmjs.org/react/-/react-19.3.1.tgz",
      "integrity": "sha512-QNhWdt7nrgVWWQG58QuGsAR3jv3Hbe4mb4vz7w2csnHavciZJgda1CPNaldF6eVxv90ud3jUXpKlHL69gO38yw==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.3.1",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.3.1.tgz",
      "integrity": "sha512-Y0bARz53lhEC1NMCASs0/j+faB/zqt3R8hpvg1e8+61ZVJ4UL0UdC4cBbXfZMcIuhrfgeILTLe+ZeBCavQPtKQ==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.28.0"
      },
      "peerDependencies": {
        "react": "^19.3.1"
      }
    },
    "node_modules/rolldown": {
      "version": "1.2.16",
      "resolved": "https://registry.npmjs.org/rolldown/-/rolldown-1.2.16.tgz",
      "integrity": "sha512-bWvlMpFKiTfDKfnK7FC2MPgPeWCf/Kpwsq49ApdW+FQaBZb6O6dZ4MAPbPUjp7hYQrw/RobqCzn64BRrQecGHw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@oxc-project/types": "=0.156.0",
        "@rolldown/pluginutils": "^1.0.0"
      },
      "bin": {
        "rolldown": "bin/cli.mjs"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "optionalDependencies": {
        "@rolldown/binding-android-arm-eabi": "1.2.16",
        "@rolldown/binding-android-arm64": "1.2.16",
        "@rolldown/binding-darwin-arm64": "1.2.16",
        "@rolldown/binding-darwin-x64": "1.2.16",
        "@rolldown/binding-freebsd-x64": "1.2.16",
        "@rolldown/binding-linux-arm-gnueabihf": "1.2.16",
        "@rolldown/binding-linux-arm64-gnu": "1.2.16",
        "@rolldown/binding-linux-arm64-musl": "1.2.16",
        "@rolldown/binding-linux-ppc64-gnu": "1.2.16",
        "@rolldown/binding-linux-s390x-gnu": "1.2.16",
        "@rolldown/binding-linux-x64-gnu": "1.2.16",
        "@rolldown/binding-linux-x64-musl": "1.2.16",
        "@rolldown/binding-openharmony-arm64": "1.2.16",
        "@rolldown/binding-win32-arm64-msvc": "1.2.16",
        "@rolldown/binding-win32-x64-msvc": "1.2.16"
      }
    },
    "node_modules/scheduler": {
      "version": "0.28.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.28.0.tgz",
      "integrity": "sha512-juorfCmIkIw8tT+p5BXSm6PJjQF/ycEYmKyzURCIt/RaZIhL+PulbQ9Yu2z1HdOJDdqDTlxA1+xKBmHXJsczAw==",
      "license": "MIT"
    },
    "node_modules/source-map-js": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.2.tgz",
      "integrity": "sha512-KGj/8Y43x35aZVDtt+J4mK1hoLGHULMYfSkODJNQjNDC3oW1PqPoxMwo0pLUsWM/UEGzON/NxeHywEfNXNP3Vw==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.17",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.17.tgz",
      "integrity": "sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/vite": {
      "version": "8.3.6",
      "resolved": "https://registry.npmjs.org/vite/-/vite-8.3.6.tgz",
      "integrity": "sha512-UI7dK29NnS54Fk+mmo7o+jI6U8Fp7hDl+X5Q1k45WH+d4dSlbLVUETGQ+hfkNgvLQGyoElPj837nZyv4MBc0VA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "lightningcss": "^1.33.0",
        "picomatch": "^4.0.7",
        "postcss": "^8.5.32",
        "rolldown": "~1.2.16",
        "tinyglobby": "^0.2.17"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "@vitejs/devtools": "^0.7.1 || ^0.8.0",
        "esbuild": "^0.27.0 || ^0.28.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "@vitejs/devtools": {
          "optional": true
        },
        "esbuild": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    }
  }
}
```

### `package.json`

```
{
  "name": "word-drawing-game",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host 0.0.0.0",
    "build": "tsc --noEmit && vite build",
    "preview": "vite preview --host 0.0.0.0",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "react": "^19.3.1",
    "react-dom": "^19.3.1"
  },
  "devDependencies": {
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "@vitejs/plugin-react": "^6.2.1",
    "typescript": "^5.9.3",
    "vite": "^8.3.6"
  }
}
```

### `src/App.tsx`

```
import { useCallback, useState } from "react";
import wordBank from "./data/words.json";
import { DrawingScreen } from "./components/DrawingScreen";
import { GuessingScreen } from "./components/GuessingScreen";
import { ResultsScreen } from "./components/ResultsScreen";
import { StartScreen } from "./components/StartScreen";
import { DRAWING_DURATION_SECONDS, DRAWING_WORD_COUNT, GUESS_CARD_COUNT } from "./game/config";
import { evaluateAnswers } from "./game/scoring";
import { selectRandomDrawings, selectRandomWords } from "./game/wordGenerator";
import type { Drawing, GamePhase, GuessResult, Word } from "./game/types";
import "./index.css";

const sourceWords = wordBank as string[];

export default function App() {
  const [phase, setPhase] = useState<GamePhase>("start");
  const [roundWords, setRoundWords] = useState<Word[]>([]);
  const [guessDrawings, setGuessDrawings] = useState<Drawing[]>([]);
  const [results, setResults] = useState<GuessResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  const startNewRound = useCallback(() => {
    try {
      const selectedWords = selectRandomWords(sourceWords, DRAWING_WORD_COUNT);
      setRoundWords(selectedWords);
      setGuessDrawings([]);
      setResults([]);
      setError(null);
      setPhase("drawing");
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Could not start a new round.",
      );
      setPhase("start");
    }
  }, []);

  const handleDrawingComplete = useCallback((drawings: Drawing[]) => {
    try {
      setGuessDrawings(selectRandomDrawings(drawings, GUESS_CARD_COUNT));
      setPhase("guessing");
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Could not prepare the guessing cards.",
      );
      setPhase("start");
    }
  }, []);

  const handleGuessSubmit = useCallback(
    (answers: Record<string, string>) => {
      setResults(evaluateAnswers(guessDrawings, answers));
      setPhase("results");
    },
    [guessDrawings],
  );

  return (
    <div className="app-root">
      {error && (
        <div className="error-banner" role="alert">
          {error}
        </div>
      )}

      {phase === "start" && (
        <StartScreen
          wordCount={DRAWING_WORD_COUNT}
          guessCount={GUESS_CARD_COUNT}
          secondsPerWord={DRAWING_DURATION_SECONDS}
          onStart={startNewRound}
        />
      )}

      {phase === "drawing" && (
        <DrawingScreen words={roundWords} onComplete={handleDrawingComplete} />
      )}

      {phase === "guessing" && (
        <GuessingScreen drawings={guessDrawings} onSubmitAnswers={handleGuessSubmit} />
      )}

      {phase === "results" && (
        <ResultsScreen results={results} onPlayAgain={startNewRound} />
      )}
    </div>
  );
}
```

### `src/components/DrawingCanvas.tsx`

```
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../game/config";

export interface DrawingCanvasHandle {
  toDataUrl: () => string;
}

export const DrawingCanvas = forwardRef<DrawingCanvasHandle>(function DrawingCanvas(
  _props,
  ref,
) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawingRef = useRef(false);

  useImperativeHandle(
    ref,
    () => ({
      toDataUrl: () => {
        const canvas = canvasRef.current;
        return canvas ? canvas.toDataURL("image/png") : "";
      },
    }),
    [],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = "#17182b";
    context.lineWidth = 10;
    context.lineCap = "round";
    context.lineJoin = "round";
  }, []);

  function getPoint(event: ReactPointerEvent<HTMLCanvasElement>) {
    const canvas = event.currentTarget;
    const rect = canvas.getBoundingClientRect();

    return {
      x: ((event.clientX - rect.left) / rect.width) * canvas.width,
      y: ((event.clientY - rect.top) / rect.height) * canvas.height,
    };
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLCanvasElement>) {
    const context = event.currentTarget.getContext("2d");

    if (!context) {
      return;
    }

    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    isDrawingRef.current = true;

    const point = getPoint(event);
    context.beginPath();
    context.moveTo(point.x, point.y);
    context.lineTo(point.x + 0.1, point.y + 0.1);
    context.stroke();
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLCanvasElement>) {
    if (!isDrawingRef.current) {
      return;
    }

    const context = event.currentTarget.getContext("2d");

    if (!context) {
      return;
    }

    event.preventDefault();
    const point = getPoint(event);
    context.lineTo(point.x, point.y);
    context.stroke();
  }

  function stopDrawing() {
    isDrawingRef.current = false;
  }

  return (
    <div className="canvas-frame">
      <canvas
        ref={canvasRef}
        className="drawing-canvas"
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        aria-label="Drawing area"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDrawing}
        onPointerCancel={stopDrawing}
        onLostPointerCapture={stopDrawing}
      />
    </div>
  );
});
```

### `src/components/DrawingScreen.tsx`

```
import { useEffect, useRef, useState } from "react";
import { DrawingCanvas } from "./DrawingCanvas";
import type { DrawingCanvasHandle } from "./DrawingCanvas";
import { DRAWING_DURATION_MS, DRAWING_DURATION_SECONDS } from "../game/config";
import type { Drawing, Word } from "../game/types";

interface DrawingScreenProps {
  words: Word[];
  onComplete: (drawings: Drawing[]) => void;
}

export function DrawingScreen({ words, onComplete }: DrawingScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(DRAWING_DURATION_SECONDS);
  const canvasRef = useRef<DrawingCanvasHandle>(null);
  const drawingsRef = useRef<Drawing[]>([]);
  const currentWord = words[currentIndex];

  useEffect(() => {
    if (!currentWord) {
      return;
    }

    const deadline = performance.now() + DRAWING_DURATION_MS;
    let completed = false;
    let intervalId: number;

    const tick = () => {
      const remainingMs = Math.max(0, deadline - performance.now());
      setTimeLeft(remainingMs / 1_000);

      if (remainingMs > 0 || completed) {
        return;
      }

      completed = true;
      window.clearInterval(intervalId);

      const drawing: Drawing = {
        id: `drawing-${currentIndex + 1}`,
        wordId: currentWord.id,
        word: currentWord.text,
        imageDataUrl: canvasRef.current?.toDataUrl() ?? "",
      };

      const updatedDrawings = [...drawingsRef.current, drawing];
      drawingsRef.current = updatedDrawings;

      if (currentIndex + 1 >= words.length) {
        onComplete(updatedDrawings);
      } else {
        setCurrentIndex((index) => index + 1);
        setTimeLeft(DRAWING_DURATION_SECONDS);
      }
    };

    intervalId = window.setInterval(tick, 25);
    tick();

    return () => {
      window.clearInterval(intervalId);
    };
  }, [currentIndex, currentWord, onComplete, words.length]);

  if (!currentWord) {
    return <main className="page-shell"><p>Could not load the words for this round.</p></main>;
  }

  const progress = ((currentIndex + 1) / words.length) * 100;
  const displayedTime = Math.max(0, timeLeft).toFixed(1);

  return (
    <main className="page-shell game-screen">
      <header className="game-header">
        <div>
          <div className="eyebrow">PHASE 1 · DRAWING</div>
          <h1>Draw this word</h1>
        </div>
        <div className={`timer-pill ${timeLeft <= 1 ? "timer-warning" : ""}`}>
          <span className="timer-dot" aria-hidden="true" />
          <span>{displayedTime} sec</span>
        </div>
      </header>

      <div className="progress-meta">
        <span>Card {currentIndex + 1} of {words.length}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={words.length}
        aria-valuenow={currentIndex + 1}
        aria-label="Drawing progress"
      >
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <section className="drawing-panel">
        <div className="word-prompt">{currentWord.text}</div>
        <p className="instruction-text">Quickly draw what this word means</p>
        <DrawingCanvas key={currentIndex} ref={canvasRef} />
        <p className="canvas-hint">Your drawing will be saved automatically when time runs out</p>
      </section>
    </main>
  );
}
```

### `src/components/GuessingScreen.tsx`

```
import { useState } from "react";
import type { FormEvent } from "react";
import type { Drawing } from "../game/types";

interface GuessingScreenProps {
  drawings: Drawing[];
  onSubmitAnswers: (answers: Record<string, string>) => void;
}

export function GuessingScreen({ drawings, onSubmitAnswers }: GuessingScreenProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmitAnswers(answers);
  }

  function updateAnswer(drawingId: string, value: string) {
    setAnswers((previous) => ({
      ...previous,
      [drawingId]: value,
    }));
  }

  return (
    <main className="page-shell guess-screen">
      <header className="game-header guess-header">
        <div>
          <div className="eyebrow">PHASE 2 · RECALL</div>
          <h1>What did you draw?</h1>
          <p className="section-description">
            Remember the original word for each drawing and type it below the card.
          </p>
        </div>
        <div className="count-pill">{drawings.length} cards</div>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="guess-grid">
          {drawings.map((drawing, index) => (
            <article className="guess-card" key={drawing.id}>
              <div className="guess-card-topline">
                <span>CARD {index + 1}</span>
              </div>
              <div className="guess-image-wrap">
                {drawing.imageDataUrl ? (
                  <img
                    src={drawing.imageDataUrl}
                    alt={`Your drawing, number ${index + 1}`}
                  />
                ) : (
                  <div className="empty-drawing">Drawing was not saved</div>
                )}
              </div>
              <label className="answer-label" htmlFor={`answer-${drawing.id}`}>
                Your word
              </label>
              <input
                id={`answer-${drawing.id}`}
                className="answer-input"
                type="text"
                inputMode="text"
                autoComplete="off"
                maxLength={40}
                placeholder="Enter your answer..."
                value={answers[drawing.id] ?? ""}
                onChange={(event) => updateAnswer(drawing.id, event.target.value)}
              />
            </article>
          ))}
        </div>

        <div className="submit-area">
          <p>Empty answers will be marked as incorrect.</p>
          <button className="button button-primary submit-button" type="submit">
            Check answers <span aria-hidden="true">→</span>
          </button>
        </div>
      </form>
    </main>
  );
}
```

### `src/components/ResultsScreen.tsx`

```
import { calculateScore, getScoreMessage } from "../game/scoring";
import type { GuessResult } from "../game/types";

interface ResultsScreenProps {
  results: GuessResult[];
  onPlayAgain: () => void;
}

export function ResultsScreen({ results, onPlayAgain }: ResultsScreenProps) {
  const score = calculateScore(results);
  const message = getScoreMessage(score.correct, score.total);

  return (
    <main className="page-shell results-screen">
      <section className="score-panel">
        <div className="eyebrow">ROUND COMPLETE</div>
        <div className="score-number">
          {score.correct}<span>/{score.total}</span>
        </div>
        <h1>{message}</h1>
        <p className="score-subtitle">
          You correctly guessed {score.correct} of {score.total} drawings · {score.percentage}%
        </p>
        <div
          className="score-track"
          role="progressbar"
          aria-label="Final score"
          aria-valuemin={0}
          aria-valuemax={score.total}
          aria-valuenow={score.correct}
        >
          <div className="score-fill" style={{ width: `${score.percentage}%` }} />
        </div>
      </section>

      <section className="review-section">
        <div className="review-heading">
          <div>
            <div className="eyebrow">ANSWER REVIEW</div>
            <h2>All cards</h2>
          </div>
          <span className="count-pill">{score.total} drawings</span>
        </div>

        <div className="results-grid">
          {results.map((result, index) => (
            <article
              className={`result-card ${result.correct ? "result-correct" : "result-wrong"}`}
              key={result.drawing.id}
            >
              <div className="result-image-wrap">
                {result.drawing.imageDataUrl ? (
                  <img
                    src={result.drawing.imageDataUrl}
                    alt={`Drawing ${index + 1}`}
                  />
                ) : (
                  <div className="empty-drawing">No drawing</div>
                )}
              </div>
              <div className="result-copy">
                <span className="result-status">
                  {result.correct ? "✓ Correct" : "✕ Not guessed"}
                  {result.correct && result.distance > 0 ? " · with a typo" : ""}
                </span>
                <div className="result-expected">{result.drawing.word}</div>
                <div className="result-answer">
                  Your answer: {result.answer.trim() || "—"}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="play-again-area">
        <button className="button button-primary" onClick={onPlayAgain}>
          Play Again <span aria-hidden="true">↻</span>
        </button>
      </div>
    </main>
  );
}
```

### `src/components/StartScreen.tsx`

```
interface StartScreenProps {
  wordCount: number;
  guessCount: number;
  secondsPerWord: number;
  onStart: () => void;
}

export function StartScreen({
  wordCount,
  guessCount,
  secondsPerWord,
  onStart,
}: StartScreenProps) {
  return (
    <main className="page-shell start-screen">
      <section className="hero-panel">
        <div className="eyebrow">A QUICK MEMORY GAME</div>
        <div className="hero-emoji" aria-hidden="true">
          ✏️
        </div>
        <h1>Draw &amp; Recall</h1>
        <p className="hero-description">
          You only have a few seconds to turn each word into a drawing.
          Then try to remember what you drew.
        </p>

        <div className="rules-grid" aria-label="Round rules">
          <div className="rule-card">
            <strong>{wordCount}</strong>
            <span>words to draw</span>
          </div>
          <div className="rule-card">
            <strong>{secondsPerWord} sec</strong>
            <span>for each word</span>
          </div>
          <div className="rule-card">
            <strong>{guessCount}</strong>
            <span>drawings to guess</span>
          </div>
        </div>

        <button className="button button-primary start-button" onClick={onStart}>
          Start Game <span aria-hidden="true">→</span>
        </button>
        <p className="small-note">
          Draw with a mouse, finger, or stylus. No artistic skills required!
        </p>
      </section>
    </main>
  );
}
```

### `src/data/words.json`

```
[
  "spoon",
  "game",
  "conductor",
  "forest",
  "highway",
  "speed",
  "airplane",
  "hammer",
  "rainbow",
  "telephone",
  "cloud",
  "river",
  "bicycle",
  "lighthouse",
  "mirror",
  "suitcase",
  "ant",
  "volcano",
  "train",
  "violin",
  "apple",
  "refrigerator",
  "ladder",
  "lantern",
  "sail",
  "island",
  "snow",
  "thunderstorm",
  "wind",
  "shadow",
  "lightning",
  "robot",
  "crown",
  "key",
  "castle",
  "tower",
  "bridge",
  "rocket",
  "pyramid",
  "clock",
  "compass",
  "map",
  "ship",
  "anchor",
  "desert",
  "jungle",
  "cave",
  "lake",
  "waterfall",
  "butterfly",
  "turtle",
  "giraffe",
  "penguin",
  "dragon",
  "frog",
  "snail",
  "spider",
  "bear",
  "fox",
  "hedgehog",
  "dance",
  "swimming",
  "running",
  "jump",
  "smile",
  "sleep",
  "music",
  "silence",
  "celebration",
  "queue",
  "exam",
  "journey",
  "riddle",
  "memory",
  "time",
  "energy",
  "temperature",
  "echo",
  "fog",
  "sand",
  "ice",
  "fire",
  "smoke",
  "magnet",
  "battery",
  "lightbulb",
  "scissors",
  "paintbrush",
  "drum",
  "guitar",
  "tent",
  "campfire",
  "skateboard",
  "elevator",
  "subway",
  "library",
  "circus",
  "space",
  "planet",
  "puzzle"
]
```

### `src/game/answerChecker.ts`

```
/**
 * Normalize a single-word answer before comparison.
 * - Unicode compatibility normalization
 * - case-insensitive comparison
 * - whitespace and punctuation are ignored
 */
export function normalizeAnswer(value: string): string {
  return value
    .normalize("NFKC")
    .toLocaleLowerCase("en-US")
    .replace(/[^\p{L}\p{N}]/gu, "");
}

/** Classic Levenshtein edit distance with O(min(a, b)) memory. */
export function levenshteinDistance(left: string, right: string): number {
  if (left === right) {
    return 0;
  }

  if (left.length === 0) {
    return right.length;
  }

  if (right.length === 0) {
    return left.length;
  }

  // Keep the shorter string in the columns to reduce memory usage.
  let rowText = left;
  let columnText = right;

  if (rowText.length < columnText.length) {
    [rowText, columnText] = [columnText, rowText];
  }

  let previousRow = Array.from(
    { length: columnText.length + 1 },
    (_, index) => index,
  );

  for (let row = 1; row <= rowText.length; row += 1) {
    const currentRow = [row];

    for (let column = 1; column <= columnText.length; column += 1) {
      const insertion = currentRow[column - 1] + 1;
      const deletion = previousRow[column] + 1;
      const substitution =
        previousRow[column - 1] +
        (rowText[row - 1] === columnText[column - 1] ? 0 : 1);

      currentRow[column] = Math.min(insertion, deletion, substitution);
    }

    previousRow = currentRow;
  }

  return previousRow[columnText.length];
}

/**
 * Conservative typo tolerance avoids accepting a different short word by
 * accident. Longer words can tolerate two edits.
 */
export function getAllowedEditDistance(expectedWord: string): number {
  const length = normalizeAnswer(expectedWord).length;

  if (length <= 3) {
    return 0;
  }

  if (length <= 7) {
    return 1;
  }

  return 2;
}

export interface AnswerCheck {
  correct: boolean;
  distance: number;
}

export function checkAnswer(
  expectedWord: string,
  userAnswer: string,
): AnswerCheck {
  const expected = normalizeAnswer(expectedWord);
  const actual = normalizeAnswer(userAnswer);

  if (actual.length === 0) {
    return {
      correct: false,
      distance: expected.length,
    };
  }

  const distance = levenshteinDistance(expected, actual);

  return {
    correct: distance <= getAllowedEditDistance(expectedWord),
    distance,
  };
}
```

### `src/game/config.ts`

```
export const DRAWING_WORD_COUNT = 20;
export const GUESS_CARD_COUNT = 10;
export const DRAWING_DURATION_MS = 4_000;
export const DRAWING_DURATION_SECONDS = DRAWING_DURATION_MS / 1_000;

export const CANVAS_WIDTH = 1_000;
export const CANVAS_HEIGHT = 750;
```

### `src/game/scoring.ts`

```
import { checkAnswer } from "./answerChecker";
import type { Drawing, GuessResult } from "./types";

export function evaluateAnswers(
  drawings: readonly Drawing[],
  answers: Readonly<Record<string, string>>,
): GuessResult[] {
  return drawings.map((drawing) => {
    const answer = answers[drawing.id] ?? "";
    const check = checkAnswer(drawing.word, answer);

    return {
      drawing,
      answer,
      distance: check.distance,
      correct: check.correct,
    };
  });
}

export function calculateScore(results: readonly GuessResult[]): {
  correct: number;
  total: number;
  percentage: number;
} {
  const total = results.length;
  const correct = results.filter((result) => result.correct).length;

  return {
    correct,
    total,
    percentage: total === 0 ? 0 : Math.round((correct / total) * 100),
  };
}

export function getScoreMessage(correct: number, total: number): string {
  if (total === 0) {
    return "Round complete.";
  }

  const ratio = correct / total;

  if (ratio === 1) {
    return "Perfect! You remembered every word.";
  }

  if (ratio >= 0.8) {
    return "Excellent result! Your memory and drawings worked well.";
  }

  if (ratio >= 0.6) {
    return "Pretty good! One more round and you can do even better.";
  }

  if (ratio >= 0.4) {
    return "Room for improvement. Maybe the drawings were a little too quick.";
  }

  return "That was mysterious! Give it another try.";
}
```

### `src/game/types.ts`

```
export type GamePhase = "start" | "drawing" | "guessing" | "results";

export interface Word {
  id: string;
  text: string;
}

export interface Drawing {
  id: string;
  wordId: string;
  word: string;
  imageDataUrl: string;
}

export interface GuessResult {
  drawing: Drawing;
  answer: string;
  distance: number;
  correct: boolean;
}
```

### `src/game/wordGenerator.ts`

```
import type { Drawing, Word } from "./types";

/** Return a shuffled copy. The original array is never mutated. */
export function shuffleArray<T>(items: readonly T[]): T[] {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

/** Choose distinct words and attach stable IDs from their source positions. */
export function selectRandomWords(
  sourceWords: readonly string[],
  count: number,
): Word[] {
  if (!Number.isInteger(count) || count < 1) {
    throw new Error("Word count must be a positive integer.");
  }

  if (sourceWords.length < count) {
    throw new Error(
      `The word bank contains ${sourceWords.length} words; ${count} are required.`,
    );
  }

  const wordItems = sourceWords.map((text, index) => ({
    id: `word-${String(index + 1).padStart(3, "0")}`,
    text,
  }));

  return shuffleArray(wordItems).slice(0, count);
}

/** Choose a random subset of already-created drawings. */
export function selectRandomDrawings(
  drawings: readonly Drawing[],
  count: number,
): Drawing[] {
  if (!Number.isInteger(count) || count < 1) {
    throw new Error("Drawing count must be a positive integer.");
  }

  if (drawings.length < count) {
    throw new Error(
      `There are ${drawings.length} drawings; ${count} are required.`,
    );
  }

  return shuffleArray(drawings).slice(0, count);
}
```

### `src/index.css`

```
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap");

:root {
  font-family: "Manrope", "Segoe UI", sans-serif;
  color: #f5f5fb;
  background: #111326;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-optical-sizing: auto;
  font-weight: 400;
  --text: #f5f5fb;
  --muted: #a7a9c0;
  --panel: #1c1f38;
  --panel-soft: #222541;
  --accent: #a98cff;
  --accent-strong: #8c6af0;
  --line: rgba(255, 255, 255, 0.1);
}

* {
  box-sizing: border-box;
}

body {
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  background:
    radial-gradient(ellipse at 12% 8%, rgba(121, 91, 214, 0.2), transparent 34rem),
    radial-gradient(ellipse at 90% 80%, rgba(41, 143, 157, 0.12), transparent 32rem),
    #111326;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

button:focus-visible,
input:focus-visible {
  outline: 3px solid rgba(185, 160, 255, 0.8);
  outline-offset: 3px;
}

.app-root {
  min-height: 100vh;
  padding: 28px 18px 56px;
}

.page-shell {
  width: min(100%, 1040px);
  margin: 0 auto;
}

.start-screen {
  display: grid;
  min-height: calc(100vh - 84px);
  place-items: center;
}

.hero-panel,
.score-panel {
  width: min(100%, 720px);
  padding: clamp(28px, 6vw, 62px);
  border: 1px solid var(--line);
  border-radius: 30px;
  background: linear-gradient(145deg, rgba(34, 37, 65, 0.96), rgba(25, 28, 49, 0.96));
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.28);
  text-align: center;
}

.eyebrow {
  color: #b9a5ff;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.hero-emoji {
  display: grid;
  width: 82px;
  height: 82px;
  margin: 28px auto 18px;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 25px;
  background: rgba(169, 140, 255, 0.13);
  font-size: 2.6rem;
  transform: rotate(-7deg);
}

h1,
h2,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 12px;
  font-size: clamp(2rem, 5.5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.055em;
  line-height: 1.08;
}

.hero-description,
.section-description {
  max-width: 570px;
  margin: 0 auto;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.75;
}

.rules-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 34px 0;
}

.rule-card {
  display: flex;
  min-height: 104px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 16px 10px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.035);
}

.rule-card strong {
  font-size: 1.55rem;
  font-weight: 800;
}

.rule-card span {
  color: var(--muted);
  font-size: 0.75rem;
  text-align: center;
}

.button {
  display: inline-flex;
  min-height: 54px;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 0 26px;
  border: 0;
  border-radius: 15px;
  font-size: 0.96rem;
  font-weight: 800;
  transition: transform 150ms ease, filter 150ms ease;
}

.button:hover {
  filter: brightness(1.08);
  transform: translateY(-2px);
}

.button:active {
  transform: translateY(0);
}

.button-primary {
  color: #171329;
  background: linear-gradient(115deg, #c4afff, #9d7df7);
  box-shadow: 0 10px 28px rgba(140, 106, 240, 0.25);
}

.start-button {
  min-width: 220px;
}

.small-note {
  margin: 20px 0 0;
  color: #8588a5;
  font-size: 0.78rem;
  line-height: 1.6;
}

.game-screen,
.guess-screen,
.results-screen {
  padding-top: 18px;
}

.game-header,
.progress-meta,
.review-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.game-header {
  margin-bottom: 24px;
}

.game-header h1 {
  margin: 7px 0 0;
  font-size: clamp(1.7rem, 4vw, 2.5rem);
}

.timer-pill,
.count-pill {
  display: inline-flex;
  min-height: 44px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 0 16px;
  border: 1px solid rgba(169, 140, 255, 0.25);
  border-radius: 999px;
  background: rgba(169, 140, 255, 0.11);
  color: #d9ccff;
  font-size: 0.9rem;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
}

.timer-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #bba4ff;
  box-shadow: 0 0 12px rgba(187, 164, 255, 0.8);
}

.timer-warning {
  border-color: rgba(255, 133, 133, 0.35);
  background: rgba(255, 105, 105, 0.12);
  color: #ffb0b0;
}

.timer-warning .timer-dot {
  background: #ff8f8f;
  box-shadow: 0 0 12px rgba(255, 143, 143, 0.8);
}

.progress-meta {
  margin-bottom: 9px;
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 700;
}

.progress-track,
.score-track {
  height: 7px;
  overflow: hidden;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.09);
}

.progress-fill,
.score-fill {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #9c7bf2, #c4afff);
  transition: width 120ms linear;
}

.drawing-panel {
  margin-top: 24px;
  padding: clamp(16px, 3vw, 28px);
  border: 1px solid var(--line);
  border-radius: 24px;
  background: rgba(28, 31, 56, 0.88);
  text-align: center;
}

.word-prompt {
  margin-top: 2px;
  color: #fff;
  font-size: clamp(2rem, 6vw, 3.4rem);
  font-weight: 800;
  letter-spacing: -0.045em;
}

.instruction-text,
.canvas-hint {
  color: var(--muted);
  font-size: 0.85rem;
}

.instruction-text {
  margin: 8px 0 20px;
}

.canvas-frame {
  width: 100%;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.14);
  border-radius: 17px;
  background: #fff;
  line-height: 0;
}

.drawing-canvas {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  background: #fff;
  cursor: crosshair;
  touch-action: none;
  user-select: none;
}

.canvas-hint {
  margin: 14px 0 0;
  font-size: 0.75rem;
}

.guess-header {
  align-items: flex-start;
  margin-bottom: 28px;
}

.guess-header .section-description {
  max-width: 660px;
  margin: 9px 0 0;
  font-size: 0.9rem;
}

.guess-grid,
.results-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.guess-card,
.result-card {
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: rgba(28, 31, 56, 0.92);
}

.guess-card {
  padding: 14px;
}

.guess-card-topline {
  margin-bottom: 11px;
  color: #aaa3ce;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.13em;
}

.guess-image-wrap,
.result-image-wrap {
  overflow: hidden;
  border-radius: 12px;
  background: #fff;
  aspect-ratio: 4 / 3;
}

.guess-image-wrap img,
.result-image-wrap img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.empty-drawing {
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 120px;
  place-items: center;
  color: #777;
  font-size: 0.8rem;
}

.answer-label {
  display: block;
  margin: 13px 0 7px;
  color: #d9d9e8;
  font-size: 0.78rem;
  font-weight: 700;
}

.answer-input {
  width: 100%;
  min-height: 46px;
  padding: 0 13px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
  outline: none;
  background: rgba(9, 11, 26, 0.48);
  color: #fff;
}

.answer-input::placeholder {
  color: #777b99;
}

.answer-input:focus {
  border-color: #a98cff;
}

.submit-area,
.play-again-area {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 26px;
}

.submit-area p {
  margin: 0;
  color: var(--muted);
  font-size: 0.8rem;
}

.submit-button {
  flex: 0 0 auto;
}

.score-panel {
  margin: 0 auto 38px;
  padding-top: 42px;
  padding-bottom: 38px;
}

.score-number {
  margin: 18px 0 7px;
  color: #fff;
  font-size: clamp(4.5rem, 16vw, 7rem);
  font-weight: 800;
  letter-spacing: -0.09em;
  line-height: 1;
}

.score-number span {
  color: #a9a5c2;
  font-size: 0.46em;
  letter-spacing: -0.05em;
}

.score-panel h1 {
  margin: 13px 0 10px;
  font-size: clamp(1.3rem, 4vw, 2rem);
  letter-spacing: -0.04em;
}

.score-subtitle {
  color: var(--muted);
  font-size: 0.87rem;
}

.score-track {
  width: min(100%, 420px);
  height: 10px;
  margin: 23px auto 0;
}

.review-heading {
  margin-bottom: 18px;
}

.review-heading h2 {
  margin: 6px 0 0;
  font-size: 1.65rem;
  letter-spacing: -0.04em;
}

.result-card {
  display: grid;
  grid-template-columns: minmax(105px, 40%) minmax(0, 1fr);
  gap: 14px;
  padding: 12px;
}

.result-correct {
  border-color: rgba(76, 201, 145, 0.35);
}

.result-wrong {
  border-color: rgba(255, 130, 130, 0.28);
}

.result-image-wrap {
  align-self: center;
}

.result-copy {
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 7px;
}

.result-status {
  color: #8de0b8;
  font-size: 0.72rem;
  font-weight: 800;
}

.result-wrong .result-status {
  color: #ffaaaa;
}

.result-expected {
  overflow-wrap: anywhere;
  color: #fff;
  font-size: 1.12rem;
  font-weight: 800;
}

.result-answer {
  overflow-wrap: anywhere;
  color: var(--muted);
  font-size: 0.77rem;
  line-height: 1.45;
}

.play-again-area {
  justify-content: center;
  margin-top: 34px;
}

.error-banner {
  width: min(100%, 1040px);
  margin: 0 auto 18px;
  padding: 13px 16px;
  border: 1px solid rgba(255, 130, 130, 0.35);
  border-radius: 12px;
  background: rgba(255, 105, 105, 0.12);
  color: #ffc0c0;
}

@media (min-width: 900px) {
  .guess-grid,
  .results-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .app-root {
    padding: 16px 12px 34px;
  }

  .hero-panel,
  .score-panel {
    border-radius: 22px;
  }

  .rules-grid {
    gap: 7px;
    margin: 26px 0;
  }

  .rule-card {
    min-height: 88px;
    padding: 12px 5px;
  }

  .rule-card strong {
    font-size: 1.2rem;
  }

  .rule-card span {
    font-size: 0.66rem;
  }

  .game-header {
    align-items: flex-start;
  }

  .timer-pill,
  .count-pill {
    min-height: 38px;
    padding: 0 11px;
    font-size: 0.76rem;
  }

  .guess-grid,
  .results-grid {
    grid-template-columns: 1fr;
    gap: 13px;
  }

  .guess-card {
    padding: 12px;
  }

  .submit-area {
    align-items: stretch;
    flex-direction: column;
  }

  .submit-button {
    width: 100%;
  }

  .result-card {
    grid-template-columns: minmax(100px, 38%) minmax(0, 1fr);
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

### `src/main.tsx`

```
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

### `tsconfig.json`

```
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": false,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

### `vite.config.ts`

```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

