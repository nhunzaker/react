import FixtureSet from '../../FixtureSet';
import TestCase from '../../TestCase';
import PasswordIconTestCase from './PasswordIconTestCase';
import PasswordRememberTestCase from './PasswordRememberTestCase';

const React = window.React;

function PasswordInputs() {
  return (
    <FixtureSet title="Password inputs">
      <TestCase
        title="The show password icon"
        description={`
          Some browsers have an unmask password icon that React accidentally
          prevents the display of.
        `}
        affectedBrowsers="IE Edge, IE 11">
        <TestCase.Steps>
          <li>Type any string (not an actual password)</li>
        </TestCase.Steps>

        <TestCase.ExpectedResult>
          The field should include the "unmasking password" icon.
        </TestCase.ExpectedResult>

        <PasswordIconTestCase />
      </TestCase>

      <TestCase
        title="Remember submitted passwords"
        description=""
        affectedBrowsers="IE Edge, IE 11">
        <TestCase.Steps>
          <li>Fill in the form inputs below</li>
          <li>Submit</li>
          <li>You should see a browser dialog to ask to remember the password</li>
        </TestCase.Steps>

        <TestCase.ExpectedResult>
          The username field should remember the user, and autopopulate the
          password.
        </TestCase.ExpectedResult>

        <PasswordRememberTestCase />
      </TestCase>
    </FixtureSet>
  );
}

export default PasswordInputs;
