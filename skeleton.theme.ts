import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const dressingRoomTheme: CustomThemeConfig = {
  name: 'dressing-room-theme',
  properties: {
    // =~= Theme Properties =~=
    '--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    '--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    '--theme-font-color-base': '0 0 0',
    '--theme-font-color-dark': '255 255 255',
    '--theme-rounded-base': '4px',
    '--theme-rounded-container': '4px',
    '--theme-border-base': '1px',
    // =~= Theme On-X Colors =~=
    '--on-primary': '0 0 0',
    '--on-secondary': '0 0 0',
    '--on-tertiary': '0 0 0',
    '--on-success': '0 0 0',
    '--on-warning': '0 0 0',
    '--on-error': '0 0 0',
    '--on-surface': '255 255 255',
    // =~= Theme Colors  =~=
    // primary | #55CDFC
    '--color-primary-50': '230 248 255', // #e6f8ff
    '--color-primary-100': '221 245 254', // #ddf5fe
    '--color-primary-200': '213 243 254', // #d5f3fe
    '--color-primary-300': '187 235 254', // #bbebfe
    '--color-primary-400': '136 220 253', // #88dcfd
    '--color-primary-500': '85 205 252', // #55CDFC
    '--color-primary-600': '77 185 227', // #4db9e3
    '--color-primary-700': '64 154 189', // #409abd
    '--color-primary-800': '51 123 151', // #337b97
    '--color-primary-900': '42 100 123', // #2a647b
    // secondary | #F88ABD
    '--color-secondary-50': '254 237 245', // #feedf5
    '--color-secondary-100': '254 232 242', // #fee8f2
    '--color-secondary-200': '253 226 239', // #fde2ef
    '--color-secondary-300': '252 208 229', // #fcd0e5
    '--color-secondary-400': '250 173 209', // #faadd1
    '--color-secondary-500': '248 138 189', // #F88ABD
    '--color-secondary-600': '223 124 170', // #df7caa
    '--color-secondary-700': '186 104 142', // #ba688e
    '--color-secondary-800': '149 83 113', // #955371
    '--color-secondary-900': '122 68 93', // #7a445d
    // tertiary | #FFFFFF
    '--color-tertiary-50': '255 255 255', // #ffffff
    '--color-tertiary-100': '255 255 255', // #ffffff
    '--color-tertiary-200': '255 255 255', // #ffffff
    '--color-tertiary-300': '255 255 255', // #ffffff
    '--color-tertiary-400': '255 255 255', // #ffffff
    '--color-tertiary-500': '255 255 255', // #FFFFFF
    '--color-tertiary-600': '230 230 230', // #e6e6e6
    '--color-tertiary-700': '191 191 191', // #bfbfbf
    '--color-tertiary-800': '153 153 153', // #999999
    '--color-tertiary-900': '125 125 125', // #7d7d7d
    // success | #A8F0C3
    '--color-success-50': '242 253 246', // #f2fdf6
    '--color-success-100': '238 252 243', // #eefcf3
    '--color-success-200': '233 251 240', // #e9fbf0
    '--color-success-300': '220 249 231', // #dcf9e7
    '--color-success-400': '194 245 213', // #c2f5d5
    '--color-success-500': '168 240 195', // #A8F0C3
    '--color-success-600': '151 216 176', // #97d8b0
    '--color-success-700': '126 180 146', // #7eb492
    '--color-success-800': '101 144 117', // #659075
    '--color-success-900': '82 118 96', // #527660
    // warning | #FFF1A8
    '--color-warning-50': '255 253 242', // #fffdf2
    '--color-warning-100': '255 252 238', // #fffcee
    '--color-warning-200': '255 252 233', // #fffce9
    '--color-warning-300': '255 249 220', // #fff9dc
    '--color-warning-400': '255 245 194', // #fff5c2
    '--color-warning-500': '255 241 168', // #FFF1A8
    '--color-warning-600': '230 217 151', // #e6d997
    '--color-warning-700': '191 181 126', // #bfb57e
    '--color-warning-800': '153 145 101', // #999165
    '--color-warning-900': '125 118 82', // #7d7652
    // error | #FF8E8E
    '--color-error-50': '255 238 238', // #ffeeee
    '--color-error-100': '255 232 232', // #ffe8e8
    '--color-error-200': '255 227 227', // #ffe3e3
    '--color-error-300': '255 210 210', // #ffd2d2
    '--color-error-400': '255 176 176', // #ffb0b0
    '--color-error-500': '255 142 142', // #FF8E8E
    '--color-error-600': '230 128 128', // #e68080
    '--color-error-700': '191 107 107', // #bf6b6b
    '--color-error-800': '153 85 85', // #995555
    '--color-error-900': '125 70 70', // #7d4646
    // surface | #2A2F40
    '--color-surface-50': '223 224 226', // #dfe0e2
    '--color-surface-100': '212 213 217', // #d4d5d9
    '--color-surface-200': '202 203 207', // #cacbcf
    '--color-surface-300': '170 172 179', // #aaacb3
    '--color-surface-400': '106 109 121', // #6a6d79
    '--color-surface-500': '42 47 64', // #2A2F40
    '--color-surface-600': '38 42 58', // #262a3a
    '--color-surface-700': '32 35 48', // #202330
    '--color-surface-800': '25 28 38', // #191c26
    '--color-surface-900': '21 23 31' // #15171f
  }
};
