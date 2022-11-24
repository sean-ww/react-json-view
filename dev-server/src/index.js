'use strict';

//import react and reactDom for browser rendering
import React from 'react';
import ReactDom from 'react-dom';

import Moment from 'moment';

//import the react-json-view component (installed with npm)
import JsonViewer from './../../src/js/index';

// the changeList translates to the highlightList in the configurator
const changeList = [{type: 'add', key: 'dev-server.locale'}, {type: 'add', key: 'dev-server.metadata[name=onboarding_country_code]'}, {
    key: 'dev-server.accounts[uuid=e6f92b16-da43-44de-9b59-4759a52e0b3b].metadata[name=test3]',
    type: 'add',
    value: {
        name: 'test3',
        value: 'val3.1',
    },
}, {
    key: 'addresses[uuid=550b2d5a-f277-4e98-8f6c-8f36115be992].city',
    oldValue: 'Bern',
    type: 'update',
    value: 'Zürich',
},];
const highlightList = [
    {type: 'update', namespace: 'dev-server', key: 'locale'},
    {type: 'remove', namespace: 'dev-server,metadata,0'},
    {type: 'add', namespace: 'dev-server,accounts,0,metadata,1'},
    {type: 'update', namespace: 'dev-server,addresses,0', key: 'city'},
];

//render 2 different examples of the react-json-view component
ReactDom.render(
    <div>
        {/* just pass in your JSON to the src attribute */}
        <JsonViewer
            sortKeys
            style={{ padding: '30px', backgroundColor: 'white' }}
            src={getExampleJsonA()}
            highlightList={highlightList}
            quotesOnKeys={false}
            collapseStringsAfterLength={12}
            onEdit={e => {
                console.log('edit callback', e);
                if (e.new_value == 'error') {
                    return false;
                }
            }}
            onDelete={e => {
                console.log('delete callback', e);
            }}
            onAdd={e => {
                console.log('add callback', e);
                if (e.new_value == 'error') {
                    return false;
                }
            }}
            onSelect={e => {
                console.log('select callback', e);
                console.log(e.namespace);
            }}
            displayObjectSize={true}
            name={'dev-server'}
            enableClipboard={copy => {
                console.log('you copied to clipboard!', copy);
            }}
            shouldCollapse={({ src, namespace, type }) => {
                if (type === 'array' && src.indexOf('test') > -1) {
                    return true;
                } else if (namespace.indexOf('moment') > -1) {
                    return true;
                }
                return false;
            }}
            defaultValue=""
        />

        <br />

        {/*/!* use a base16 theme *!/*/}
        {/*<JsonViewer*/}
        {/*    src={getExampleJson1()}*/}
        {/*    theme="railscasts"*/}
        {/*    validationMessage="You're doing something wrong."*/}
        {/*    collapseStringsAfterLength={15}*/}
        {/*    onEdit={e => {*/}
        {/*        console.log(e);*/}
        {/*        if (e.new_value === 'error') {*/}
        {/*            return false;*/}
        {/*        }*/}
        {/*    }}*/}
        {/*    onDelete={e => {*/}
        {/*        console.log(e);*/}
        {/*    }}*/}
        {/*    onAdd={e => {*/}
        {/*        console.log(e);*/}
        {/*        if (e.new_value === 'error') {*/}
        {/*            return false;*/}
        {/*        }*/}
        {/*    }}*/}
        {/*    name={false}*/}
        {/*    iconStyle="triangle"*/}
        {/*    shouldCollapse={({ src, type }) =>*/}
        {/*        type === 'object' &&*/}
        {/*        src.constructor &&*/}
        {/*        src.constructor.name === 'Moment'*/}
        {/*    }*/}
        {/*/>*/}

        {/*<br />*/}

        {/*/!* initialize this one with a name and default collapsed *!/*/}
        {/*<JsonViewer*/}
        {/*    src={getExampleJson2()}*/}
        {/*    collapsed={true}*/}
        {/*    name={'feature_set'}*/}
        {/*    displayDataTypes={false}*/}
        {/*    indentWidth={2}*/}
        {/*/>*/}

        {/*<br />*/}

        {/*/!* initialize this one with a name and default collapsed *!/*/}
        {/*<JsonViewer*/}
        {/*    src={getExampleJson2()}*/}
        {/*    collapsed={1}*/}
        {/*    name={'feature_set'}*/}
        {/*    displayDataTypes={false}*/}
        {/*    indentWidth={5}*/}
        {/*/>*/}

        {/*<br />*/}

        {/*/!* initialize an example with a long string *!/*/}
        {/*<JsonViewer*/}
        {/*    src={getExampleJson3()}*/}
        {/*    collapsed={true}*/}
        {/*    name={'collapsed_by_default_example'}*/}
        {/*    indentWidth={8}*/}
        {/*    displayObjectSize={false}*/}
        {/*    displayDataTypes={false}*/}
        {/*    enableClipboard={false}*/}
        {/*/>*/}

        {/*<br />*/}

        {/*/!*demo array support*!/*/}
        {/*<JsonViewer*/}
        {/*    src={getExampleArray()}*/}
        {/*    theme="solarized"*/}
        {/*    onEdit={edit => {*/}
        {/*        console.log(edit);*/}
        {/*    }}*/}
        {/*/>*/}

        {/*<br />*/}

        {/*/!* custom theme example *!/*/}
        {/*<JsonViewer*/}
        {/*    enableClipboard={false}*/}
        {/*    src={getExampleJson1()}*/}
        {/*    shouldCollapse={({ src, namespace, type }) =>*/}
        {/*        namespace.indexOf('moment') > -1*/}
        {/*    }*/}
        {/*    theme={{*/}
        {/*        base00: 'white',*/}
        {/*        base01: '#ddd',*/}
        {/*        base02: '#ddd',*/}
        {/*        base03: '#444',*/}
        {/*        base04: 'purple',*/}
        {/*        base05: '#444',*/}
        {/*        base06: '#444',*/}
        {/*        base07: '#444',*/}
        {/*        base08: '#444',*/}
        {/*        base09: 'rgba(70, 70, 230, 1)',*/}
        {/*        base0A: 'rgba(70, 70, 230, 1)',*/}
        {/*        base0B: 'rgba(70, 70, 230, 1)',*/}
        {/*        base0C: 'rgba(70, 70, 230, 1)',*/}
        {/*        base0D: 'rgba(70, 70, 230, 1)',*/}
        {/*        base0E: 'rgba(70, 70, 230, 1)',*/}
        {/*        base0F: 'rgba(70, 70, 230, 1)'*/}
        {/*    }}*/}
        {/*/>*/}

        {/*<JsonViewer*/}
        {/*    theme="hopscotch"*/}
        {/*    collapsed={false}*/}
        {/*    name="large_array"*/}
        {/*    groupArraysAfterLength={50}*/}
        {/*    src={getExampleJson4()}*/}
        {/*/>*/}
    </div>,
    document.getElementById('app-container')
);

/*-------------------------------------------------------------------------*/
/*     the following functions just contain test json data for display     */
/*-------------------------------------------------------------------------*/

//just a function to get an example JSON object
function getExampleJson1() {
    return {
        string: 'this is a test string',
        integer: 42,
        empty_array: [],
        empty_object: {},
        array: [1, 2, 3, 'test'],
        float: -2.757,
        undefined_var: undefined,
        parent: {
            sibling1: true,
            sibling2: false,
            sibling3: null,
            isString: value => {
                if (typeof value === 'string') {
                    return 'string';
                } else {
                    return 'other';
                }
            }
        },
        string_number: '1234',
        date: new Date(),
        moment: Moment(),
        regexp: /[0-9]/gi
    };
}

function getExampleJsonA() {
    return {
        accounts: [
            {
                metadata: [
                    {
                        name: 'test1',
                        value: 'val2',
                    },
                    {
                        name: 'test3',
                        value: 'val3.1',
                    },
                ],
                addresses: [],
                uuid: 'e6f92b16-da43-44de-9b59-4759a52e0b3b',
            },
            {
                metadata: [
                    {
                        name: 'iban',
                        value: 'CH9300762011623852957',
                    },
                    {
                        name: 'bank_name',
                        value: 'Alternative Bank',
                    },
                ],
                uuid: '8812e7bd-8eb2-4ce7-a427-b231cfae942f',
            },
        ],
        "metadata": [
            {
                "name": "onboarding_country_code",
                "value": "CH"
            }
        ],
        addresses: [
            {
                world_code: 'EARTH',
                address_line2: 'CH',
                address_line1: 'Hardturmstrasse 101',
                city: 'Zürich',
                created: 1662016609,
                postal_code: '8005',
                type: 'main',
                uuid: '550b2d5a-f277-4e98-8f6c-8f36115be992',
            },
        ],
        "website_url": "",
        "created": 1669291629,
        "approval_status": "new",
        "merchant_category_code": "8699",
        "name": "Livios Unapproved Org",
        "active": false,
        "locale": "de_CH",
        "uuid": "10140a3a-1ab5-4080-8e56-0446d9ca1fef"
    };
}

//and another a function to get an example JSON object
function getExampleJson2() {
    return {
        normalized: {
            '1-grams': {
                body: 1,
                testing: 1
            },
            '2-grams': {
                'testing body': 1
            },
            '3-grams': {}
        },
        noun_phrases: {
            body: 1
        },
        lemmatized: {
            '1-grams': {
                test: 1,
                body: 1
            },
            '2-grams': {
                'test body': 1
            },
            '3-grams': {}
        },
        dependency: {
            '1-grams': {
                testingVERBROOTtestingVERB: 1,
                bodyNOUNdobjtestingVERB: 1
            },
            '2-grams': {
                'testingVERBROOTtestingVERB bodyNOUNdobjtestingVERB': 1
            },
            '3-grams': {}
        }
    };
}

function getExampleJson3() {
    return {
        example_information:
            'this example has the collapsed prop set to true and the indentWidth prop is set to 8',
        default_collapsed: true,
        collapsed_array: [
            'you expanded me',
            'try collapsing and expanding the root node',
            'i will still be expanded',
            {
                leaf_node: true
            }
        ]
    };
}

function getExampleJson4() {
    const large_array = new Array(225).fill(
        'this is a large array full of items'
    );

    large_array.push(getExampleArray());

    large_array.push(new Array(75).fill(Math.random()));

    return large_array;
}

function getExampleArray() {
    return [
        'you can also display arrays!',
        new Date(),
        1,
        2,
        3,
        {
            pretty_cool: true
        }
    ];
}
