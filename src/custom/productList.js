
const productList = (num) => {
    const eventDetails = {
        1:{
          title: '뮤지컬1',
          rank: '1위',
          days: '11',
          time: '22',
          age: '33',
          price: '44',
        },
        2:{
          title: '뮤지컬2',
          rank: '2위',
          days: '1111',
          time: '2222',
          age: '3333',
          price: '4444',
        }
    }

    return eventDetails[num]
}

export default productList