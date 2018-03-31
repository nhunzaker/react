import RangeInputFixtures from './range-inputs';
import TextInputFixtures from './text-inputs';
import SelectFixtures from './selects';
import TextAreaFixtures from './textareas';
import InputChangeEvents from './input-change-events';
import NumberInputFixtures from './number-inputs';
import PasswordInputFixtures from './password-inputs';
import ButtonFixtures from './buttons';
import DateInputFixtures from './date-inputs';
import ErrorHandling from './error-handling';
import EventPooling from './event-pooling';
import CustomElementFixtures from './custom-elements';
import MediaEventsFixtures from './media-events';

const React = window.React;

class Field extends React.Component {
  state = {value: '', last: 'UNRECORDED'};

  onChange = event => {
    this.setState({
      value: event.target.value || '',
      last: event.target === window ? 'WINDOW' : event.target.tagName,
    });
  };

  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.onChange} />
        <div>Last target was {this.state.last}</div>
      </div>
    );
  }
}

/**
 * A simple routing component that renders the appropriate
 * fixture based on the location pathname.
 */
function FixturesPage() {
  switch (window.location.pathname) {
    case '/text-inputs':
      return <TextInputFixtures />;
    case '/range-inputs':
      return <RangeInputFixtures />;
    case '/selects':
      return <SelectFixtures />;
    case '/textareas':
      return <TextAreaFixtures />;
    case '/input-change-events':
      return <InputChangeEvents />;
    case '/number-inputs':
      return <NumberInputFixtures />;
    case '/password-inputs':
      return <PasswordInputFixtures />;
    case '/buttons':
      return <ButtonFixtures />;
    case '/date-inputs':
      return <DateInputFixtures />;
    case '/error-handling':
      return <ErrorHandling />;
    case '/event-pooling':
      return <EventPooling />;
    case '/custom-elements':
      return <CustomElementFixtures />;
    case '/media-events':
      return <MediaEventsFixtures />;
    default:
      return (
        <div>
          <h1>IE9 Input Target Issue</h1>
          <ol>
            <li>Open this page in IE9</li>
            <li>Type into the textbox below</li>
            <li>The target is the window. Why?</li>
          </ol>
          <fieldset>
            <Field />
          </fieldset>
        </div>
      );
  }
}

export default FixturesPage;
