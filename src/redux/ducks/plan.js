const initialState = {
  plan : {
    days : [
      {
        dayId: 1,
        todayPlan: [
          { exId: 1, reps: 10 },
          { exId: 2, reps: 15 }
        ]
      },
      {
        dayId: 2,
        todayPlan: [
          { exId: 2, reps: 14 },
          { exId: 3, reps: 20 }
        ]
      }
    ],
    exercisesList : [
      {exId : 1, name : "PushUps", desc: "some exercise description"},
      {exId : 2, name : "PullUps", desc : "some exercise description"},
      {exId : 3, name : "Jumps", desc : "some exercise description"},
      {exId : 4, name : "Squats", desc : "some exercise description"}
    ]
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;      
  }
};