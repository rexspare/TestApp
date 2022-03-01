import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import { Form, TextValidator } from 'react-native-validator-form';

export default class TestScreen extends Component {

    state = {
        email: '',
        password: null,
        pass_length: false,
        pass_Capital: false,
        pass_Lower: false,
        pass_Number: false,
        pass_Speial: false,
        ValidMail: false
    }

    handleChange = async (email) => {
        const emailRegEx = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
        await this.setState({ email });
        if (emailRegEx.test(this.state.email)) {
            this.setState({ ValidMail: true })
        } else {
            this.setState({ ValidMail: false })
        }
    }


    handlePassord = async (text) => {
        const long = RegExp("^(?=.{8,})")
        const Capital = RegExp("^(?=.*[A-Z])")
        const Number = RegExp("^(?=.*[0-9])")
        const Special = RegExp("^(?=.[!@#$%^&])")
        const lower = RegExp("^(?=.*[a-z])")
        await this.setState({ password: text })

        if (long.test(this.state.password)) {
            this.setState({ pass_length: true })
        } else {
            this.setState({ pass_length: false })
        }
        if (Capital.test(this.state.password)) {
            this.setState({ pass_Capital: true })
        } else {
            this.setState({ pass_Capital: false })
        }
        { Number.test(this.state.password) ? this.setState({ pass_Number: true }) : this.setState({ pass_Number: false }) }
    }

    submit = () => {
        // your submit logic
    }

    handleSubmit = () => {
        this.refs.form.submit();
    }


    render() {
        const { email, password } = this.state;
        return (
            <View>
                <Form
                    ref="form"
                    onSubmit={this.handleSubmit}
                >
                    <TextInput
                        placeholder='email'
                        onChangeText={(text) => this.handleChange(text)} />
                    {this.state.ValidMail ? <Text>Mail OK</Text> : null}
                    <TextInput
                        placeholder='Password'
                        onChangeText={(text) => this.handlePassord(text)}
                    />

                    {this.state.pass_length ? <Text>Length OK</Text> : null}
                    {this.state.pass_Capital ? <Text>Capital OK</Text> : null}
                    {this.state.pass_Number ? <Text>Number OK</Text> : null}
                    <Button
                        title="Submit"
                        onPress={() => this.props.loginF(email, password)}
                    />
                </Form>

            </View>
        )
    }
}
