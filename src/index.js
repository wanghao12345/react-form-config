/*** src/index.js ***/
import React from 'react';

import {
    Button,
    Form, 
    Space
} from 'antd';
import 'antd/dist/antd.css'

import { getFormItems } from './props'


class ReactFormConfigure extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            layout: {
                labelCol: { span: 8 },
                wrapperCol: { span: 16 }
            },
            formReceiveProps: {},
            configFormItemJson: [],
            operatorButton: {}
        }
    }

    componentDidMount() {
        let formReceiveProps = {}
        let configFormItemJson = []
        let operatorButton = {}
        Object.keys(this.props).forEach(key => {
            if (key === 'configFormItemJson') {
                configFormItemJson = this.props[key] || []
            } else if (key === 'operatorButton') {
                operatorButton = this.props[key] || {}
            } else {
                formReceiveProps[key] = this.props[key]
            }
        })
        this.setState({
            formReceiveProps,
            configFormItemJson,
            operatorButton
        })
    }

    render() {
        const { formReceiveProps, configFormItemJson, operatorButton } = this.state
        const Items = getFormItems(configFormItemJson)
        return (
            <Form
                {...formReceiveProps}
            >
                { Items }
                <Form.Item wrapperCol={operatorButton.wrapperCol}>
                    <Space>
                        <Button type="primary" htmlType="submit">{operatorButton.okTxt || '提交'}</Button>
                        {
                            operatorButton.onCancel ? (
                                <Button onClick={operatorButton.onCancel}>{operatorButton.cancelTxt || '取消'}</Button>
                            ) : ''
                        }
                    </Space>
                </Form.Item>
            </Form>
        )
    }
}

export default ReactFormConfigure;