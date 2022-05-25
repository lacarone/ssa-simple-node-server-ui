import {
    Avatar,
    Title, 
    Card, Group, Center, Container, Space, Image,
} from '@mantine/core';
import UserRecentPostsCard from '../../components/UserRecentPostsCard/UserRecentPostsCard';
import UserRecentPostsFilters from '../../components/UsersRecentPostsFilters/UserRecentPostsFilters';
import SSALogo from '../../components/SSALogo/SSALogo';
import { AvatarGenerator } from 'random-avatar-generator';
import { UserRecentPosts } from '../../types/usersTypes';


function UserRecentPostsList(props: any) {
    // userRecentPostsData
    // Generate a random avatar 
    const avatarGenerator = new AvatarGenerator();
    const avatarPlaceholder = '';
    const randomAvatar = avatarGenerator.generateRandomAvatar();
    /**
     * DevNote
     * here we would have some kind of URL validator util function
     * will come back to add it if I have some time remaining
     */

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

    const usersRecentPostsList = fakeData.map(
            (userPosts) => <UserRecentPostsCard userRecentPosts={userPosts} />
        );

    return (
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
                    <UserRecentPostsFilters showResultsPerPageFilter={true} />
                </Container>
            </Center>
            <Space h="lg" />
            <Center>
                <Container size="xs">
                    {usersRecentPostsList}
                    <Space h="md" />
                    <UserRecentPostsFilters />
                    <Space h="xl" />
                    <Space h="xl" />
                    <SSALogo />
                </Container>
            </Center>
        </Container>
    )
}


export default UserRecentPostsList;