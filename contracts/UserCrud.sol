pragma solidity ^0.4.6;

contract UserCrud {

  struct UserStruct {
    string userEmail;
    uint userAge;
    int userPoint;
    uint index;
  }
  
  mapping(address => UserStruct) private userStructs;
  address[] private userIndex;

  event LogNewUser   (address indexed userAddress, uint index, string userEmail, uint userAge);
  event LogUpdateUser(address indexed userAddress, uint index, string userEmail, uint userAge);
  event LogDeleteUser(address indexed userAddress, uint index);
  
  function isUser(address userAddress)
    public 
    constant
    returns(bool isIndeed) 
  {
    if(userIndex.length == 0) return false;
    return (userIndex[userStructs[userAddress].index] == userAddress);
  }

  function insertUser(
    address userAddress, 
    string userEmail, 
    uint    userAge,
    int    userPoint) 
    public
    returns(uint index)
  {
    if(isUser(userAddress)) throw; 
    userStructs[userAddress].userEmail = userEmail;
    userStructs[userAddress].userAge   = userAge;
    userStructs[userAddress].userPoint   = userPoint;
    userStructs[userAddress].index     = userIndex.push(userAddress)-1;
    LogNewUser(
        userAddress, 
        userStructs[userAddress].index, 
        userEmail, 
        userAge);
    return userIndex.length-1;
  }

  function deleteUser(address userAddress) 
    public
    returns(uint index)
  {
    if(!isUser(userAddress)) throw; 
    uint rowToDelete = userStructs[userAddress].index;
    address keyToMove = userIndex[userIndex.length-1];
    userIndex[rowToDelete] = keyToMove;
    userStructs[keyToMove].index = rowToDelete; 
    userIndex.length--;
    LogDeleteUser(
        userAddress, 
        rowToDelete);
    LogUpdateUser(
        keyToMove, 
        rowToDelete, 
        userStructs[keyToMove].userEmail, 
        userStructs[keyToMove].userAge);
    return rowToDelete;
  }
  
  function getUser(address userAddress)
    public 
    constant
    returns(string userEmail, uint userAge, int userPoint, uint index)
  {
    if(!isUser(userAddress)) throw; 
    return(
      userStructs[userAddress].userEmail, 
      userStructs[userAddress].userAge, 
      userStructs[userAddress].userPoint, 
      userStructs[userAddress].index);
  } 
  
  function updateUserEmail(address userAddress, string userEmail) 
    public
    returns(bool success) 
  {
    if(!isUser(userAddress)) throw; 
    userStructs[userAddress].userEmail = userEmail;
    LogUpdateUser(
      userAddress, 
      userStructs[userAddress].index,
      userEmail, 
      userStructs[userAddress].userAge);
    return true;
  }
  
  function updateUserAge(address userAddress, uint userAge) 
    public
    returns(bool success) 
  {
    if(!isUser(userAddress)) throw; 
    userStructs[userAddress].userAge = userAge;
    LogUpdateUser(
      userAddress, 
      userStructs[userAddress].index,
      userStructs[userAddress].userEmail, 
      userAge);
    return true;
  }
  
  function updateUserPoint(address userAddress, int userPoint) 
    public
    returns(bool success) 
  {
    if(!isUser(userAddress)) throw; 
    require(userStructs[userAddress].userPoint + userPoint >= 0);
    userStructs[userAddress].userPoint += userPoint;
    
    return true;
  }

  function getUserCount() 
    public
    constant
    returns(uint count)
  {
    return userIndex.length;
  }

  function getUserAtIndex(uint index)
    public
    constant
    returns(address userAddress)
  {
    return userIndex[index];
  }
}