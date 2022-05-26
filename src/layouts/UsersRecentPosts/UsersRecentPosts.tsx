import {
    Avatar,
    Title, 
    Card, Group, Center, Container, Space, Image,
    LoadingOverlay,
    Affix,
    Button,
} from '@mantine/core';
import UserRecentPostsCard from '../../components/UserRecentPostsCard/UserRecentPostsCard';
import UserRecentPostsFilters from '../../components/UsersRecentPostsFilters/UserRecentPostsFilters';
import SSALogo from '../../components/SSALogo/SSALogo';
import { AvatarGenerator } from 'random-avatar-generator';
import { UserRecentPosts } from '../../types/usersTypes';
import { useEffect, useState } from 'react';
import { Check, UserPlus, Users } from 'tabler-icons-react';
import getUsersByPage from './_getUsersByPage';
import generateUsers from './_generateUsers';
import { showNotification } from '@mantine/notifications';


function UserRecentPostsList(props: any) {
    // userRecentPostsData
    // Generate a random avatar 
    const avatarGenerator = new AvatarGenerator();
    const avatarPlaceholder = '';
    const randomAvatar = avatarGenerator.generateRandomAvatar();
    const [fetchingData, setFetchingData] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(3);
    const [totalPages, setTotalPages] = useState(1);
    const [usersData, setUsersData] = useState([]);
    const [generatingMoreUsers, setGeneratingMoreUsers] = useState(false);


    const generateMoreUsers = () => {
      setFetchingData(true);
      setGeneratingMoreUsers(true);
      generateUsers(7, 5)
        .then((res: any) => {
          if (res?.status >= 200 && res?.status < 300) {
            // fake UX delay
            setTimeout(() => {
                setCurrentPage(1);
                showNotification({
                    disallowClose: true,
                    autoClose: 2600,
                    title: "Users Generated",
                    message: 'Successfully generated more users',
                    color: 'teal',
                    radius: 'md',
                    icon: <Check />,
                });
                setGeneratingMoreUsers(false);
                setFetchingData(false);
              }, 1800);
          }
        })
        .catch((error: any) => {
          console.log(error);
        })
    }

    const getUsers = () => {
      setFetchingData(true);
      getUsersByPage(currentPage, resultsPerPage)
        .then((res: any) => {
          if (res?.status === 200 || res?.status === 202) {
            setTotalPages(res.data.pagination.total_pages);
            if (res.data.data.length) {
              setUsersData(res.data.data);
            }
            else {
              setTotalPages(1);
              setCurrentPage(1);
            }
          }
          setFetchingData(false);
        })
        .catch((error: any) => {
          console.log(error);
        })
    }

    useEffect(() => {
      getUsers();
    },
    [currentPage, resultsPerPage]);

    const fakeData = [
        {
          "id": 1,
          "name": "Richard Dawkinsas da dasd asd adas",
          "posts": [
            {
              "id": 1,
              "title": "Title 1",
              "body": "lorem isaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsasisaid nasijafi  doajsoj doasjo jdoajsas",
              "created_at": "2022-05-24 00:01:00.000"
            },
            {
              "id": 2,
              "title": "Title 2",
              "body": "lorem isaid nasijafias",
              "created_at": "2022-05-24 00:00:00.000"
            }
          ]
        },
        {
          "id": 2,
          "name": "Name 2",
          "posts": [
            {
              "id": 1,
              "title": "Title 1",
              "body": "js idahio haiosfhi ohaosif as",
              "created_at": "2022-05-24 00:00:00.000"
            }
          ]
        },
        {
          "id": 3,
          "name": "Name 3",
          "posts": []
        }
      ];

    const usersRecentPostsList = usersData.map(
            (userPosts, index) => <UserRecentPostsCard key={index} userRecentPosts={userPosts} />
        );

    return (
      <>
        <LoadingOverlay style={{position: 'fixed'}} visible={fetchingData} />
        <Container py={35} px={16} size="lg">

            <Center>
                    <SSALogo />
            </Center>
            <Space h="md" />
            <Center>
                <Title order={2}>Users' 2 Most Recent Posts</Title>
            </Center>
            <Space h="md" />
            <Center>
                <Container size="lg">
                    <UserRecentPostsFilters 
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      totalPages={totalPages} 
                      resultsPerPage={resultsPerPage}
                      setResultsPerPage={setResultsPerPage}
                      showResultsPerPageFilter={true} 
                    />
                </Container>
            </Center>
            <Space h="lg" />
            <Center>
                <Container size="xs">
                    {usersRecentPostsList}
                    <Space h="md" />
                    <UserRecentPostsFilters 
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      totalPages={totalPages} 
                      resultsPerPage={resultsPerPage}
                      setResultsPerPage={setResultsPerPage}
                    />
                    <Space h="xl" />
                    <Space h="xl" />
                    <SSALogo />
                </Container>
            </Center>
        </Container>
        <Affix position={{ bottom: 20, right: 20 }}>
          <Button 
            leftIcon={<UserPlus size={18} />} 
            radius="md" 
            loading={generatingMoreUsers} 
            onClick={generateMoreUsers}
            
            color="teal"
          >
            Add more users
          </Button>
        </Affix>
      </>
    )
}


export default UserRecentPostsList;