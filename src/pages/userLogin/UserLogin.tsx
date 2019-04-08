import * as React from 'react'
import { Form, Icon, Input, Button } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import AppState from 'src/redux/appState'
import { userLogin } from 'src/redux/user/actions'
import { ROLE } from 'src/utils/authority'

function hasErrors(fieldsError: any) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

interface HorizontalLoginFormProps extends FormComponentProps {
  userLogin: (role: ROLE) => void
}

const mapDispatchToProps = {
  userLogin
}

const mapStateToProps = (state: AppState) => {
  return {}
}

class HorizontalLoginForm extends React.Component<HorizontalLoginFormProps> {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields()
  }

  handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form

    // Only show error after a field is touched.
    const userNameError =
      isFieldTouched('userName') && getFieldError('userName')
    const passwordError =
      isFieldTouched('password') && getFieldError('password')
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item
          validateStatus={userNameError ? 'error' : ''}
          help={userNameError || ''}
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Log in
          </Button>
          <Button
            type="primary"
            onClick={() => this.props.userLogin(ROLE.Admin)}
          >
            Direct Login
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(
  HorizontalLoginForm
)

export default withConnect(WrappedHorizontalLoginForm) as React.ComponentClass
