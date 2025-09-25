import { defineConfig } from 'tsdown'

export default defineConfig({
    watch: ['.env', '.env.*', 'src', '../../packages'],
})
