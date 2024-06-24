exports.handler = async (event, context) => {
    try {
        // Your code logic goes here.......

        return {
            statusCode: 200,
            body: JSON.stringify({ lambda: '1', message: 'Lambda executed successfully' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Lambda execution failed', error })
        };
    }
};