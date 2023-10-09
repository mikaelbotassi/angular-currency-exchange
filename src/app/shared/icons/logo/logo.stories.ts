import { componentWrapperDecorator, type Meta, type StoryObj } from '@storybook/angular';
import { LogoComponent } from './logo.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<LogoComponent> = {
  title: 'shared/icons/logo/LogoComponent',
  component: LogoComponent,
  decorators:[componentWrapperDecorator((story) =>
    `
    <div style="
    display:flex;
    align-items:center;
    justify-content:center
    ">
    ${story}
    </div>
    `
  )]
};

export default meta;
type Story = StoryObj<LogoComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Default: Story = {};
