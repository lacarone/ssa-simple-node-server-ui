import { useState } from 'react';
import {
    Card, Group, InputWrapper, Pagination, SegmentedControl, Container, Center, Title, Space,
} from '@mantine/core';


function UserRecentPostsFilters(props: any) {
    // gets props.userRecentPosts
    // UI widget
    
    const handleResultsPerPage = (n) => {
        props.setResultsPerPage(Number(n));
    };
    

    return (
        <Container size="lg">
            <>
                {props?.showResultsPerPageFilter &&
                    <> 
                        <Title align="center" order={6}>Results per page</Title>
                        <Space h="sm" />
                        <SegmentedControl
                            value={props.resultsPerPage} 
                            onChange={handleResultsPerPage}
                            color="white" 
                            radius="md" 
                            size="md"
                            fullWidth 
                            data={[
                                { label: '3x', value: '3' },
                                { label: '5x', value: '5' },
                                { label: '10x', value: '10' },
                            ]}
                        />
                        <Space h="md" />
                    </>
                }

            </>
            <Center>
                <Pagination 
                    total={props.totalPages} 
                    page={props.currentPage}
                    onChange={props.setCurrentPage}
                    color="gray" 
                    size="md" 
                    radius="md" 
                />
            </Center>
            
        </Container>
    )

}


export default UserRecentPostsFilters;