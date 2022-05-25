import {
    Avatar,
    Title, 
    Spoiler,
    Card, Group, SimpleGrid, Text,
} from '@mantine/core';


function UserPostCard(props: any) {
    
    return (
        <Card shadow="xs" p="md" radius="md" >
            <Title order={5}>{props.userPostCard.title}</Title>
            
                {/* <Text>
                    {props.userPostCard.body}
                </Text> */}

                <Spoiler maxHeight={68} showLabel="Show more" hideLabel="Hide">
                    {props.userPostCard.body}
                </Spoiler>
        </Card>
    )
}


export default UserPostCard;