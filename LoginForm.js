var LoginForm = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
  },

  onUserNameInput: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {username: e.target.value}))
  },

  onPasswordInput: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {password: e.target.value}))
  },

  onSubmit: function(e) {
    e.preventDefault()
    this.props.onSubmit()
  },

  render: function() {
    var errors = this.props.value.errors || {}

    return (
      React.createElement('form', {onSubmit: this.onSubmit, className: 'LoginForm', noValidate: true},
        React.createElement('input', {
          type: 'text',
          className: errors.username && 'LoginForm-error',
          placeholder: 'Username (required)',
          onInput: this.onUsernameInput,
          value: this.props.value.username,
          ref: 'name',
        }),
        React.createElement('input', {
          type: 'password',
          className: errors.password && 'LoginForm-error',
          placeholder: 'Password (required)',
          onInput: this.onPasswordInput,
          value: this.props.value.password,
          noValidate: true,
        }),
        React.createElement('button', {type: 'submit'}, "Login")
      )
    )
  },
});
