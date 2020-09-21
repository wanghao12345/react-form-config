/*** examples/src/app.js ***/
import React from 'react'
import { render } from 'react-dom'
import ReactFormConfigure from '../../src'
 
const App = () => {
    let layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 19 }
    }
    let configFormItemJson = [
        {
            type: 'input',
            label: 'Username',
            name: 'username',
            rules: [
                { 
                    required: true, 
                    message: 'Please input your username!' 
                }
            ]
        },
        {
            type: 'password',
            label: 'Password',
            name: 'password',
            rules: [
                { 
                    required: true, 
                    message: 'Please input your password!' 
                }
            ]
        },
        {
            type: 'select',
            label: 'Select',
            name: 'select',
            options: [
                {
                    label: '选项一',
                    value: 'opt1'
                },
                {
                    label: '选项二',
                    value: 'opt2'
                }
            ]
        }
    ]

    let operatorButton = {
        okTxt: '确定',
        cancelTxt: '取消',
        wrapperCol: { span: 19, offset: 5 },
        onCancel: () => {
            alert('取消了')
        }
    }

    const onFinish = (values) => {
        console.log('success:', values)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('failed:', errorInfo)
    }

    return (
        <ReactFormConfigure 
            {...layout}
            labelAlign={'right'}
            operatorButton={operatorButton}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            configFormItemJson={configFormItemJson}
        />
    )
}
render(<App />, document.getElementById('root'))