import { componentWrapperDecorator, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { CardHeaderComponent } from './card-header.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<CardHeaderComponent> = {
  title: 'pages/home/components/card/card-header/CardHeaderComponent',
  component: CardHeaderComponent,
  render: (args) => {
    const { ...props } = args; 
    return {
      props,
      template: `
        <app-card-header>
          Todo Here...
        </app-card-header>
      `
    }; 
  }, 
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
]
};

export default meta;
type Story = StoryObj<CardHeaderComponent>;

export const Default: Story = {};
