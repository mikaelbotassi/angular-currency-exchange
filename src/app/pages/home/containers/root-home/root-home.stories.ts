import { componentWrapperDecorator, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { RootHomeComponent } from './root-home.component';
import { SharedModule } from 'src/app/shared/shared.module';

const meta: Meta<RootHomeComponent> = {
  title: 'pages/home/containers/root-home/RootHomeComponent',
  component: RootHomeComponent,
  decorators:[
    componentWrapperDecorator((story) =>
    `
    <div style="
    padding:3rem 0;
    display:flex;
    align-items:center;
    justify-content:center
    ">
      <div style="position:relative;width:100%">
        ${story}
      </div>
    </div>
    `
  ),
  moduleMetadata({
    imports:[
      SharedModule
    ]
  }),
]
};

export default meta;
type Story = StoryObj<RootHomeComponent>;

export const Default: Story = {};
