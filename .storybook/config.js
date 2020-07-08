import { addDecorator, configure } from '@storybook/react';

import StylesDecorator from './styles-decorator';

addDecorator(StylesDecorator);

// automatically import all files ending in *.stories.tsx
configure(require.context('../stories', true, /\.stories\.ts$/), module);
