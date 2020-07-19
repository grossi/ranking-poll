import React, {Component} from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { withStyles } from '@material-ui/core/styles';
import styles from './SortableListStyle';
 
const SortableItem = SortableElement(({value}) => <li>{value}</li>);
 
const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </ul>
  );
});
 
class SortableComponent extends Component {
  state = {
    items: ['Anime A', 'Anime B', 'Anime C', 'Anime D'],
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };

  render() {
    const { classes } = this.props;
    console.log("classes?", classes)
    return <div className={classes.root}>
        <SortableList
          axis={"x"}
          items={this.state.items}
          onSortEnd={this.onSortEnd} 
        />
      </div>;
  }
}
 
export default withStyles(styles)(SortableComponent);
