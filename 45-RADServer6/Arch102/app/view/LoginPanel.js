/*
 * File: app/view/LoginPanel.js
 *
 * This file was generated by Sencha Architect version 4.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('LoginApp.view.LoginPanel', {
    extend: 'Ext.Container',
    alias: 'widget.login-panel',

    requires: [
        'LoginApp.view.LoginPanelViewModel',
        'LoginApp.view.LoginPanelViewController',
        'Ext.Container',
        'Ext.Label',
        'Ext.field.Password',
        'Ext.field.Checkbox',
        'Ext.Button'
    ],

    controller: 'loginpanel',
    viewModel: {
        type: 'loginpanel'
    },
    itemId: 'mycontainer',
    padding: '',

    items: [
        {
            xtype: 'container',
            style: 'background-color: #FFFFFF;',
            width: 400,
            centered: true,
            padding: 10,
            items: [
                {
                    xtype: 'container',
                    defaults: 'margin: 10',
                    items: [
                        {
                            xtype: 'label',
                            style: 'font-size: 20px',
                            html: '<div align="center">Sign into your account</div>',
                            padding: '0 0 10 0'
                        },
                        {
                            xtype: 'textfield',
                            id: 'username',
                            name: 'username',
                            scrollable: false,
                            label: 'Username',
                            labelWidth: '40%',
                            required: true
                        },
                        {
                            xtype: 'passwordfield',
                            id: 'password',
                            name: 'password',
                            scrollable: false,
                            label: 'Password',
                            labelWidth: '40%',
                            required: true
                        },
                        {
                            xtype: 'checkbox',
                            name: 'rememberme',
                            scrollable: false,
                            label: 'Remember Me',
                            labelWidth: '40%'
                        },
                        {
                            xtype: 'container',
                            padding: '15 0 0 0',
                            layout: {
                                type: 'hbox',
                                align: 'center',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    cls: [
                                        'x-button-focus',
                                        'x-button-pressed'
                                    ],
                                    width: 150,
                                    text: 'Sign In',
                                    listeners: {
                                        tap: 'onSignIn'
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    margin: '15 0 0 0',
                    layout: {
                        type: 'hbox',
                        align: 'center',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'button',
                            ui: 'decline',
                            width: '50%',
                            text: 'Forgot Password',
                            listeners: {
                                tap: 'onForgotPassword'
                            }
                        },
                        {
                            xtype: 'button',
                            ui: 'confirm',
                            width: '50%',
                            text: 'Create Account',
                            listeners: {
                                tap: 'onCreateAccount'
                            }
                        }
                    ]
                }
            ]
        }
    ]

});