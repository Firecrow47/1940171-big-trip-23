import SortView from '../view/sort-view.js';
// import AddNewPointView from '../view/add-new-point.js';
import EditPointView from '../view/edit-point-view.js';
import PointView from '../view/point-view.js';
import {render} from '../render.js';
import FilterView from '../view/filter-view.js';
import TripInfoView from '../view/trip-info-view.js';
import NewEventButtonView from '../view/new-event-button-view.js';
import EventsListView from '../view/events-list-view.js';


export default class BoardPresenter {
  eventListComponent = new EventsListView();

  constructor({boardContainer,headerContainer,pointModel}) {
    this.boardContainer = boardContainer;
    this.headerContainer = headerContainer;
    this.pointModel = pointModel;
  }

  init = () => {
    const points = this.pointModel.getPoints();
    const destination = this.pointModel.getDestination();
    const offers = this.pointModel.getOffers();
    render(new TripInfoView(), this.headerContainer);
    render(new FilterView(), this.headerContainer);
    render(new NewEventButtonView(), this.headerContainer);
    render(new SortView(),this.boardContainer);
    render(this.eventListComponent,this.boardContainer);
    // render(new AddNewPointView(), this.eventListComponent.getElement());
    render(new EditPointView(points[0], destination, offers), this.eventListComponent.getElement());
    points.forEach((point) => {
      if (points[0] === point) {
        return;
      }
      render(new PointView(point, destination), this.eventListComponent.getElement());
    });

  };
}

