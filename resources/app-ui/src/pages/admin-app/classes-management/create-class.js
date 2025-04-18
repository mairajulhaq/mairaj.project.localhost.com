import {
    PageContainer,
    FooterToolbar,
    ProCard,
    ProForm,
    ProFormText,
    ProFormTextArea,
    ProFormList,
    ProFormSelect,
    ProFormSegmented,
    ProFormUploadDragger
} from '@ant-design/pro-components';
import {Row, Col, message, Button, Form, Image, Upload} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import React, {useEffect, useState} from "react";
import {request, history} from '@umijs/max';

import { getFile, getBase64 } from '@/components/Helpers/ImageConversion';


const waitTime = (time = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};


/**
 * Form Submission handler and API Request Performer
 */
const onFinishHandlerForm = async (values, imageUrl) => {
    console.log('onFinishHandlerForm');
    console.log('Received values of form: ', values);

    /**
     * API Request
     */
    try {

        const request_data = {
            // image_url: imageUrl,
            title: values?.title,
            description: values?.description,
            status: values?.status,
            author_id: 1,
            category_id: 2,
        };

        return await request('/api/classes', {
            method: 'POST',
            data: request_data,

        }).then(async (api_response) => {

            /**
             * Class Created then show message and redirect to listing screen
             */
            if (api_response?.data?.id > 0) {
                message.success('Submitted successfully');
                history.push('/admin-app/classes/edit/' + api_response?.data?.id);
            }

        }).catch(function (error) {
            console.log(error);
        });

    } catch (api_response) {
        console.log('api_response - error');
        console.log(api_response);
    }

    return true;
    
};


const CreateClass = () => {

    /**
     * States of Component
     */

    const [form] = Form.useForm();
    const [imageUrl, setImageUrl] = useState(DEFAULT_PLACEHOLDER_IMAGE_URL);

    /**
     * The Component Output
     */

    return (
        <PageContainer>
            
                <ProForm
                    onFinish={async (values) => {
                        await waitTime(2000);
                        await onFinishHandlerForm(values, imageUrl);
                    }}
                    layout='vertical'
                    grid={true}
                    form={form}
                    submitter={{
                        render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
                    }}
                >
                
                    <ProCard
                        title="Class Details"
                        bordered
                        headerBordered
                        collapsible
                        size="default"
                        type="inner"
                        style={{
                            marginBlockEnd: 15,
                            minWidth: 800,
                            maxWidth: '100%',
                        }}
                        onCollapse={(collapse) => console.log(collapse)}
                    >

                        <ProForm.Group size={ 24 }>
                            <ProFormText
                                name={ 'title' }
                                label="Title"
                                placeholder="Type Class Title"
                                rules={ [ { required: true } ] }
                                colProps={ { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 } }
                            />
                        </ProForm.Group>
                        <ProForm.Group size={ 24 }>
                            <ProFormTextArea
                                name={ 'description' }
                                label="Description"
                                fieldProps={ {
                                    rows: 6,
                                } }
                                placeholder="Share a little description to fill out your class."
                                colProps={ { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 } }
                            />
                        </ProForm.Group>
                        <ProForm.Group size={ 24 }>
                            <ProFormSegmented
								name={ 'status' }
								label="Status"
								initialValue="in-active"
								valueEnum={ {
									'in-active': 'In-Active',
									active: 'Active',
								} }
								colProps={ { xs: 24, sm: 24, md: 6, lg: 6, xl: 6 } }
							/>
                        </ProForm.Group>
                        <ProForm.Group size={ 24 }>
                            <ProFormUploadDragger
                                name={ 'paymen_proof_image_url' }
								label="Upload Payment Proof"
                                max={1}
                                title={'Click or drag files into this area to upload'}
                                description={'Supported extension: .jpg .png .docx'}
                                accept={'.jpg, .png, .docx'}
                                rules={[{ required: true, message: 'Please upload payment proof image' }]}
                                colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
                                // action= {(SITE_URL+"/wp-json/wp/v2/form-document/")}
                                // onChange={ async (info) => {
                                //     if (info.file.status === 'done') {
                                //         setFormDocumentDetails(info.file.response.data);
                                //     }
                                // }}
                            />
                        </ProForm.Group>
                        
                    </ProCard>
                    
                </ProForm>
                
        </PageContainer>
    );

};

export default CreateClass;
