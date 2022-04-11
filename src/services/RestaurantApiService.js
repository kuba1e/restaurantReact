export default class RestaurantApiService {
  _baseUrl = "https://restaurant202203.herokuapp.com/";
 //_baseUrl = "http://localhost:4000/";

  fetchData = async (url) => {
    try {
      const response = await fetch(this._baseUrl + url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  sendData = async (url, data) => {
    try {
      const response = await fetch(this._baseUrl + url, {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  };

  updateData = async (url, data) => {
    try {
      const response = await fetch(this._baseUrl + url + "/" + data.get('id'), {
        method: "PUT",
        body: data,
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteData = async (url, data) => {
    try {
      console.log(data)
      const response = await fetch(this._baseUrl + url + "/" + data.id,{
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  };

  fetchTables = async () => {
    try {
      const tables = await this.fetchData("tables");
      return tables.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  fetchDishes = async () => {
    try {
      const dishes = await this.fetchData("dishes");
      return dishes.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  fetchWaiters = async () => {
    try {
      const waiters = await this.fetchData("waiters");
      return waiters.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  fetchBills = async () => {
    try {
      const bills = await this.fetchData("bills");
      return bills.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  sendBill = async (data) => {
    try {
      return await this.sendData("bills", data);

    } catch (error) {
      throw new Error(error);
    }
  };

  sendTable = async (data) => {
    try {
      return await this.sendData("tables", data);
    } catch (error) {
      throw new Error(error);
    }
  };

  sendDish = async (data) => {
    try {
      return await this.sendData("dishes", data);
    } catch (error) {
      throw new Error(error);
    }
  };

  sendWaiter = async (data) => {
    try {
      return await this.sendData("waiters", data);
    } catch (error) {
      throw new Error(error);
    }
  };

  updateTable = async (data) => {
    try {
      return await this.updateData("tables", data);
    } catch (error) {
      throw new Error(error);
    }
  };

  updateDish = async (data) => {
    try {
      return await this.updateData("dishes", data);
    } catch (error) {
      throw new Error(error);
    }
  };

  updateBill = async (data) => {
    try {
      return await this.updateData("bills", data);
    } catch (error) {
      throw new Error(error);
    }
  };

  updateWaiter = async (data) => {
    try {
      return await this.updateData("waiters", data);
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteTable = async (data) => {
    try {
      return await this.deleteData("tables", data);
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteDish = async (data) => {
    try {
      return await this.deleteData("dishes", data);
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteBill = async (data) => {
    try {
      return await this.deleteData("bills", data);
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteWaiter = async (data) => {
    try {
      return await this.deleteData("waiters", data);
    } catch (error) {
      throw new Error(error);
    }
  };
}
