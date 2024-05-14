## Note: Issue seems to be the import "../global.css" (see https://www.nativewind.dev/v4/getting-started/expo-router) line in app/layout.tsx. Removing this line resolves the issues.

## To reproduce issue

1. Install dependencies

   ```bash
   npm install
   ```

2. Configure EAS Update

   ```bash
   eas update:configure
   ```

3. Running eas update gets stuck

   ```bash
   eas update
   ```

4. Trying expo export also gets stuck

   ```bash
   npx expo export --output-dir dist --dump-sourcemap --dump-assetmap --platform=all
   ```
