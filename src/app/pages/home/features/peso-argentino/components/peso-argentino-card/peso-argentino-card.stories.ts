import { componentWrapperDecorator, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { rest } from 'msw';
import { HttpClientModule } from '@angular/common/http';
import { QuoteApiService } from 'src/app/pages/home/services/quote-api.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from 'src/app/pages/home/components/card/card.component';
import { CardContentComponent } from 'src/app/pages/home/components/card/card-content/card-content.component';
import { CardHeaderComponent } from 'src/app/pages/home/components/card/card-header/card-header.component';
import { Quote } from 'src/app/pages/home/models/Quote';
import { ErrorMessageComponent } from 'src/app/pages/home/components/card/error-message/error-message.component';
import { PesoArgentinoCardComponent } from './peso-argentino-card.component';
import { PesoArgentinoService } from '../../services/peso-argentino.service';

const lessThanEqual1Mock = new Quote("Peso Argentino");
lessThanEqual1Mock.ask = '0.5';
lessThanEqual1Mock.pctChange = '1,5';
lessThanEqual1Mock.create_date = '2023-10-10 00:08:45';

const GreatherThan1LessThanEqual5Mock = new Quote("Peso Argentino");
GreatherThan1LessThanEqual5Mock.ask = '3.75';
GreatherThan1LessThanEqual5Mock.pctChange = '1,5';
GreatherThan1LessThanEqual5Mock.create_date = '2023-10-10 00:08:45';

const GreatherThan5Mock = new Quote("Peso Argentino");
GreatherThan5Mock.ask = '5.75';
GreatherThan5Mock.pctChange = '1,5';
GreatherThan5Mock.create_date = '2023-10-10 00:08:45';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<PesoArgentinoCardComponent> = {
  title: 'pages/home/features/peso-argentino/components/PesoArgentinoCardComponent',
  component: PesoArgentinoCardComponent,
  args:{
    isLoading: false,
    error: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-peso-argentino-card>
        <app-card>
          <app-card-header>{{'${args.currency.name}'}}</app-card-header>
          <app-card-content
          [textColor]="'${args.getTextColor}'"
          [currency]="'${args.currency.ask}'"
          [percent]="'${args.currency.pctChange}'"
          [created_date]="'${args.currency.create_date}'"
          [isLoading]="${args.isLoading}"
          [error]="${args.error}"
          (restart)="${args.restartRequests}"
          ></app-card-content>
        </app-card>
      </app-peso-argentino-card>
   `,
  }),
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
    imports: [HttpClientModule, SharedModule],
    declarations: [
      CardComponent,
      CardContentComponent,
      CardHeaderComponent,
      ErrorMessageComponent
    ],
    providers: [QuoteApiService,PesoArgentinoService]
  }),
]
};

export default meta;
type Story = StoryObj<PesoArgentinoCardComponent>;

export const Loading: Story = {
  args:{
    isLoading:true,
    currency: lessThanEqual1Mock,
  },
  parameters: {
    msw: [
      rest.get('https://economia.awesomeapi.com.br/ARS', (req, res, ctx) => {
        return res(ctx.json(lessThanEqual1Mock))
      }),
    ],
  },
};
export const WithErrors: Story = {
  args:{
    error:true,
    currency: lessThanEqual1Mock,
  },
  parameters: {
    msw: [
      rest.get('https://economia.awesomeapi.com.br/ARS', (req, res, ctx) => {
        return res(ctx.status(403));
      }),
    ],
  },
};
export const lessThanEqual1: Story = {
  args:{
    currency: lessThanEqual1Mock,
  },
  parameters: {
    msw: [
      rest.get('https://economia.awesomeapi.com.br/ARS', (req, res, ctx) => {
        return res(ctx.json(lessThanEqual1Mock))
      }),
    ],
  },
};
export const GreatherThan1LessThanEqual5: Story = {
  args:{
    currency: GreatherThan1LessThanEqual5Mock,
  },
  parameters: {
    msw: [
      rest.get('https://economia.awesomeapi.com.br/ARS', (req, res, ctx) => {
        return res(ctx.json(GreatherThan1LessThanEqual5Mock))
      }),
    ],
  },
};
export const GreatherThan5: Story = {
  args:{
    currency: GreatherThan5Mock,
  },
  parameters: {
    msw: [
      rest.get('https://economia.awesomeapi.com.br/ARS', (req, res, ctx) => {
        return res(ctx.json(GreatherThan5Mock))
      }),
    ],
  },
};
