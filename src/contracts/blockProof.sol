//SPDX-License-Identifier: MIT
pragma solidity >=0.5.0;

contract blockProof {
    uint public uCount;
    uint public cCount;
    mapping(uint => User) public users;
    mapping(uint => Certificate) public certificates;

    struct User {
        uint id;
        address userAddress;
        string name;
        string userType;
    }

    struct Certificate {
        uint id;
        string uid;
        string url;
        address issuer;
        address recipient;
        bool isValid;
        string desc;
    }

    event generatedCertificate(string uid);

    function createUser(string memory _name, string memory _type) external {
        uCount++;
        users[uCount] = User(uCount, msg.sender, _name, _type);
    }

    function issueCertificate(
        string memory _url,
        address _recipient,
        string memory _desc
    ) external {
        require(bytes(_url).length > 0);
        require(bytes(_desc).length > 0);

        cCount++;
        string memory uid = "s27ghdb2648nd";
        certificates[cCount] = Certificate(
            cCount,
            uid,
            _url,
            msg.sender,
            _recipient,
            true,
            _desc
        );
        emit generatedCertificate(uid);
    }

    function revokeCertificate(uint _id) external {
        Certificate memory cert = certificates[_id];
        require(cert.issuer == msg.sender);
        cert.isValid = false;
        certificates[_id] = cert;
    }

    function verifyCertificate(
        string memory _uid
    ) external view returns (bool, uint) {
        bool valid = false;
        uint id = 0;
        for (uint i = 1; i <= cCount; ++i) {
            if (
                keccak256(abi.encodePacked(certificates[i].uid)) ==
                keccak256(abi.encodePacked(_uid))
            ) {
                valid = certificates[i].isValid;
                id = i;
            }
        }
        return (valid, id);
    }
}
