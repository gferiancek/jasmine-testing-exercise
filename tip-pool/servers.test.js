describe('servers.js test', function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  describe('submitServerInfo() tests', function () {
    it('should add a new server to allServers', function () {
      submitServerInfo();

      expect(Object.keys(allServers).length).toEqual(1);
      expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });

    it('should not add a new server if serverName is empty', function () {
      serverNameInput.value = '';
      submitServerInfo();

      expect(Object.keys(allServers).length).toEqual(0);
    });
  });

  describe('updateServerTable() tests', function () {
    it('should append new tr serverTable', function () {
      submitServerInfo();

      let tdList = document.querySelectorAll('#server1 td');
      expect(tdList.length).toEqual(2);
      expect(tdList[0].innerText).toEqual('Alice');
      expect(tdList[1].innerText).toEqual('$0.00');
    });
  });

  afterEach(function () {
    // teardown logic
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});
