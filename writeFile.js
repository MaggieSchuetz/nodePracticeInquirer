const fs = require('fs');
const template = {
  component: (name) => {
    const componentString = `import styled from 'styled-components'
    export default function ${name}() {
      return <div>${name}</div>
    }
    `;
    return componentString;
  },

  spec: (name) => {
    const specString = `
    import { render, screen } from '@testing-library/react';
    //import component to test

    describe('', () => {
      it('', () => {
        render(<div />);
        expect().toBeInTheDocument();
      });
    })`;
    return specString;
  },

  stories: (name) => {
    const storiesString = `
    // import component to render in Storybook;

    export default {
      title: 'Component/Dahsboard',
      component: Dashboard,
    };

    const Template = () => <div />;

    export const NameofComponent = Template.bind({});
  `;
    return storiesString;
  },
};

module.exports = function writeFile(name, fileType) {
  const fileName = fileType === 'component' ? `./${name}.js` : `./${name}.${fileType}.js`;
  const fileString = template[fileType](name);

  fs.writeFileSync(fileName, fileString);
};
