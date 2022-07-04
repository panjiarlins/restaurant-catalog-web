import CONFIG from '../globals/config';
import UrlParser from '../routes/url-parser';

const AddReview = {
  init() {
    this._reviewEventSubmitForm();
    this._reviewEventOnlineOffline();
  },

  async _add() {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this._parseReviewToObject()),
      };

      const response = await fetch(`${CONFIG.BASE_URL}review`, options);
      const responseJson = await response.json();
      console.log(responseJson.message);
    } catch (error) {
      console.log(error);
    }
  },

  _isReviewValueFilled() {
    return (!!this._restaurantId && !!this._reviewerName && !!this._review);
  },

  _parseReviewToObject() {
    return {
      id: this._restaurantId,
      name: this._reviewerName,
      review: this._review,
    };
  },

  _reviewEventSubmitForm() {
    const form = document.querySelector('#form-review');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._restaurantId = UrlParser.parseActiveUrlWithoutCombiner().id;
      this._reviewerName = document.querySelector('#name-review').value;
      this._review = document.querySelector('#input-review').value;

      if (this._isReviewValueFilled()) {
        this._add();
        form.reset();
      }
    });
  },

  _reviewEventOnlineOffline() {
    const offlineForm = document.querySelector('#form-when-offline');
    const onlineForm = document.querySelector('#form-when-online');
    window.addEventListener('online', () => {
      offlineForm.style.display = 'none';
      onlineForm.style.display = null;
    });

    window.addEventListener('offline', () => {
      offlineForm.style.display = null;
      onlineForm.style.display = 'none';
    });
  },
};

export default AddReview;
