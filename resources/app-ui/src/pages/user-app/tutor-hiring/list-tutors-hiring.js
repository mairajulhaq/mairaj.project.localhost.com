import { EyeOutlined, SearchOutlined, ReadOutlined, BankOutlined, MailOutlined } from '@ant-design/icons';
import { ProList } from '@ant-design/pro-components';
import { Button, Col, Row, Input, Card, Tooltip } from 'antd';
import { request } from '@umijs/max';
import { useModel } from 'umi';
import { useState } from "react";
import ViewTutorHiring from './view-tutor-hiring';

import { truncateText } from "../../../components/Helpers/TextHelpers";

export const waitTimePromise = async (time = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};

export const waitTime = async (time = 100) => {
    await waitTimePromise(time);
};

const { Meta } = Card;

const ListTutorsHiring = () => {

    const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');

    console.log('initialState');
    console.log(initialState);

    console.log('loading');
    console.log(loading);

    const [ searchKeywords, setSearchKeywords ] = useState('');
    const [ viewModelVisiblity, setViewModelVisiblity ] = useState( false );
    const [ viewModelData, setViewModelData ] = useState( {} );

    return (
        <div>
            <div className="page-banner-wrapper">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <div className="page-banner-content">
                            <h1>Tutor Hiring</h1>
                        </div>
                    </Col>
                </Row>

                <Row justify={"center"}>
                    <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                        <div className="tutors-grid-filters" style={{marginBlockEnd: "20px"}}>
                        <div className="tutor-search-field">
                            <Input
                                size="large"
                                placeholder="Search by Name or Email of Tutors"
                                prefix={<SearchOutlined />}
                                onChange={(e) => {
                                    console.log('test search input');
                                    console.log(e.target.value);
                                    setSearchKeywords(e.target.value);
                                }}
                            />
                        </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <ProList
                pagination={{
                    defaultPageSize: 6,
                    showSizeChanger: true,
                    pageSizeOptions: [6, 9, 10, 20, 50, 100],
                }}
                showActions="hover"
                grid={{ gutter: 16, column: 3 }}
                itemCardProps={{
                    prefixCls: "tutors-grid",
                }}
                params={{
                    searchInput: searchKeywords
                }}
                request={async (params, sort, filter) => {

                    console.log('tutors-hiring - params');
                    console.log(params);

                    console.log('tutors-hiring - params - sort');
                    console.log(sort);

                    console.log('tutors-hiring - params - filter');
                    console.log(filter);

                    /**
                     * Delay the API request
                     */
                    await waitTime(2000);

                    return await request("/api/users", {
                        params: {
                            // page: params?.current,
                            // per_page: params?.pageSize,
                            // order_by: "id",
                            // order: "desc",
                            sort: {...sort},
                            pagination: {...params},
                            role: 'tutor',
                            search: params?.searchInput
                        },
                    }).then(async (api_response) => {
                        return {
                            data: api_response.data.data,
                            total: api_response.data.total,
                            current_page: api_response.data.current_page,
                        };
                    }).catch(function (error) {
                            // console.log(error);
                    });
                }}
                metas={{
                    content: {
                        render: (text, item) => {
                            return (
                                <Card
                                    style={{
                                        width: "100%",
                                        height: "630px", // Set a fixed height for all cards
                                    }}
                                    actions={[
                                        <Tooltip title="Thank you for visiting! Explore the details of this Tutor.">
                                        <Button
                                            type="primary"
                                            icon={<EyeOutlined />}
                                            key="preview"
                                            size={"large"}
                                            onClick={() => {
                                                setViewModelData(item);
                                                setViewModelVisiblity(true);
                                            }}
                                        >
                                            View Details
                                        </Button>
                                        </Tooltip>,
                                    ]}
                                    cover={
                                        <img
                                        alt="example"
                                        src={item?.image_url}
                                        style={{ height: "300px" }}
                                        />
                                    }
                                    >
                                    <h2>{item?.name}</h2>
                                    
                                    <Meta
                                        description={
                                        <>
                                            <p>{ item?.bio_data ? truncateText(item?.bio_data, 18) : ''}</p>
                                            <p>
                                            <MailOutlined /> {item?.email}
                                            </p>
                                            <p>
                                            <ReadOutlined /> {item?.qualifications?.length > 0 ? item.qualifications[0].degree : "-"}
                                            </p>
                                            <p>
                                            <BankOutlined /> {item?.qualifications?.length > 0 ? item.qualifications[0].institute : "-"}
                                            </p>
                                        </>
                                        }
                                    />
                                </Card>
                            );
                        },
                    },
                }}
            />

            <ViewTutorHiring
                visible={ viewModelVisiblity }
                onVisiblityChange={ ( { VisiblityStatus } ) => {
                    setViewModelVisiblity( VisiblityStatus );
                } }
                viewModelData={ viewModelData }
                waitTime={ waitTime }
            />

    </div>
    );
};

export default ListTutorsHiring;
