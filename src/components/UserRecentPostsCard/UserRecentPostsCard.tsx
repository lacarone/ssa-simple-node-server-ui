import {
    Avatar,
    Title, 
    Text,
    Card, Group, SimpleGrid, Space,
} from '@mantine/core';
import { AvatarGenerator } from 'random-avatar-generator';
import UserPostCard from './_UserPostCard';
// import { UserRecentPosts } from '../../types/usersTypes';


function UserRecentPostsCard(props: any) {
    // userRecentPosts
    // Generate a random avatar 
    const avatarGenerator = new AvatarGenerator();
    const avatarPlaceholder = '';
    const randomAvatar = avatarGenerator.generateRandomAvatar();
    /**
     * DevNote
     * here we would have some kind of URL validator util function
     * will come back to add it if I have some time remaining
     */

    // Transform posts into JSX
    const userPosts = (() => {
        if (props.userRecentPosts?.posts.length) {
            return props.userRecentPosts?.posts.map((post: object) => {
                return (
                    <UserPostCard userPostCard={post} />
                );
            });
        }
        return null;
    })();

    return (
        <Card shadow="lg" p="xl" radius="md" my={10} >
            <Group>
                <Avatar 
                    src={
                        randomAvatar
                        ?
                        randomAvatar
                        :
                        avatarPlaceholder
                    } 
                    alt="User avatar" 
                />
                <Title order={3}>{props.userRecentPosts.name}</Title>
            </Group>
            <Space h="md" />
            <SimpleGrid>
                {
                    userPosts
                    ?
                    userPosts
                    :
                    <Text color="gray" align="center"><em>No posts</em></Text>
                }
            </SimpleGrid>
        </Card>
    )
}

// UserRecentPostsCard.propTypes = {
//     userRecentPosts: UserRecentPosts,
// }


export default UserRecentPostsCard;