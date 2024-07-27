export const addUser = async (newUser) => {
    const query = `
    mutation Mutation($userId: String!, $firstName: String!, $lastName: String!, $email: String!, $phone: String!, $password: String!) {
        addUser(id: $userId, firstName: $firstName, lastName: $lastName, email: $email, phone: $phone, password: $password) {
            firstName
            lastName
            phone
            email
            id
            password
        }
    }
`;

    const res = await fetch('https://bwd-server.onrender.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Aceept: 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: {
                userId: newUser.userId,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                phone: newUser.phone,
                password: newUser.password,
            },
        }),
    });

    const data = await res.json();
    console.log(data);
    return data;
};
