import Fixture from '../../Fixture';

const React = window.React;

const cancel = event => event.preventDefault();

class PasswordRememberTestCase extends React.Component {
  state = {username: '', password: ''};

  onChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {
    return (
      <Fixture>
        <h2>
          Remember: This is not secure, do not pass actual login credentials
        </h2>

        <form className="control-box" method="post" onSubmit={cancel}>
          <div>
            <label htmlFor="username" className="control-label">
              Name
            </label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="control-label">
              Key
            </label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </Fixture>
    );
  }
}

export default PasswordRememberTestCase;
