const processData = (data) => {
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[A-Za-z]$/.test(item));
    const highestAlphabet = alphabets.length > 0 ? [alphabets.sort().reverse()[0]] : [];

    return {
        is_success: true,
        user_id: "prakash_11062002",
        email: "prakash@example.com",
        roll_number: "XYZ456",
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet,
        timestamp: new Date().toISOString()
    };
};

module.exports = processData;
