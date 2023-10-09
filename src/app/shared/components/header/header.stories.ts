import { componentWrapperDecorator, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { HeaderComponent } from './header.component';
import { LogoComponent } from '../../icons/logo/logo.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<HeaderComponent> = {
  title: 'shared/components/header/HeaderComponent',
  component: HeaderComponent,
  decorators:[
    componentWrapperDecorator((story) =>
    `
    <div style="
    padding:3rem 0;
    display:flex;
    align-items:center;
    justify-content:center
    ">
      <div style="position:relative; width:100%">
      ${story}
      </div>
    </div>
    `
  ),
  moduleMetadata({
    declarations: [
      LogoComponent
    ]
  }),
]
};

export default meta;
type Story = StoryObj<HeaderComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Default: Story = {};
