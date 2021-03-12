const initialState = {
  plan : {
    days : [
      {
        dayId: 1,
        todayPlan: [
          { exId: 1, reps: 5 },
          { exId: 2, reps: 10 },
          { exId: 3, reps: 10 },
          { exId: 4, reps: 10 },
          { exId: 5, reps: 10 }
        ]
      },
      {
        dayId: 2,
        todayPlan: [
          { exId: 1, reps: 5 },
          { exId: 2, reps: 10 },
          { exId: 3, reps: 10 },
          { exId: 4, reps: 10 },
          { exId: 5, reps: 10 }
        ]
      },
      {
        dayId: 3,
        todayPlan: [
          { exId: 1, reps: 5 },
          { exId: 2, reps: 15 },
          { exId: 3, reps: 15 },
          { exId: 4, reps: 10 },
          { exId: 5, reps: 10 }
        ]
      },
      {
        dayId: 4,
        todayPlan: [
          { exId: 1, reps: 5 },
          { exId: 2, reps: 15 },
          { exId: 3, reps: 15 },
          { exId: 4, reps: 10 },
          { exId: 5, reps: 10 }
        ]
      },
      {
        dayId: 5,
        todayPlan: [
          { exId: 1, reps: 5 },
          { exId: 2, reps: 15 },
          { exId: 3, reps: 15 },
          { exId: 4, reps: 10 },
          { exId: 5, reps: 10 }
        ]
      },
      {
        dayId: 6,
        todayPlan: [
          { exId: 1, reps: 10 },
          { exId: 2, reps: 15 },
          { exId: 3, reps: 15 },
          { exId: 4, reps: 10 },
          { exId: 5, reps: 10 }
        ]
      },
      {
        dayId: 7,
        todayPlan: [
          { exId: 1, reps: 10 },
          { exId: 2, reps: 15 },
          { exId: 3, reps: 15 },
          { exId: 4, reps: 10 },
          { exId: 5, reps: 10 }
        ]
      },
      {
        dayId: 8,
        todayPlan: [
          { exId: 1, reps: 10 },
          { exId: 2, reps: 15 },
          { exId: 3, reps: 15 },
          { exId: 4, reps: 10 },
          { exId: 5, reps: 15 }
        ]
      },
      {
        dayId: 9,
        todayPlan: [
          { exId: 1, reps: 10 },
          { exId: 2, reps: 15 },
          { exId: 3, reps: 15 },
          { exId: 4, reps: 10 },
          { exId: 5, reps: 15 }
        ]
      },
      {
        dayId: 10,
        todayPlan: [
          { exId: 1, reps: 10 },
          { exId: 2, reps: 15 },
          { exId: 3, reps: 15 },
          { exId: 4, reps: 10 },
          { exId: 5, reps: 15 }
        ]
      },
      {
        dayId: 11,
        todayPlan: [
          { exId: 1, reps: 10 },
          { exId: 2, reps: 20 },
          { exId: 3, reps: 20 },
          { exId: 4, reps: 15 },
          { exId: 5, reps: 15 }
        ]
      },
      {
        dayId: 12,
        todayPlan: [
          { exId: 1, reps: 10 },
          { exId: 2, reps: 20 },
          { exId: 3, reps: 20 },
          { exId: 4, reps: 15 },
          { exId: 5, reps: 15 }
        ]
      },
      {
        dayId: 13,
        todayPlan: [
          { exId: 1, reps: 15 },
          { exId: 2, reps: 20 },
          { exId: 3, reps: 20 },
          { exId: 4, reps: 15 },
          { exId: 5, reps: 20 }
        ]
      },
      {
        dayId: 14,
        todayPlan: [
          { exId: 1, reps: 15 },
          { exId: 2, reps: 20 },
          { exId: 3, reps: 20 },
          { exId: 4, reps: 15 },
          { exId: 5, reps: 20 }
        ]
      },
      {
        dayId: 15,
        todayPlan: [
          { exId: 1, reps: 15 },
          { exId: 2, reps: 20 },
          { exId: 3, reps: 20 },
          { exId: 4, reps: 15 },
          { exId: 5, reps: 20 }
        ]
      },
      {
        dayId: 16,
        todayPlan: [
          { exId: 1, reps: 15 },
          { exId: 2, reps: 25 },
          { exId: 3, reps: 25 },
          { exId: 4, reps: 15 },
          { exId: 5, reps: 20 }
        ]
      },
      {
        dayId: 17,
        todayPlan: [
          { exId: 1, reps: 15 },
          { exId: 2, reps: 25 },
          { exId: 3, reps: 25 },
          { exId: 4, reps: 15 },
          { exId: 5, reps: 20 }
        ]
      },
      {
        dayId: 18,
        todayPlan: [
          { exId: 1, reps: 20 },
          { exId: 2, reps: 25 },
          { exId: 3, reps: 25 },
          { exId: 4, reps: 20 },
          { exId: 5, reps: 25 }
        ]
      },
      {
        dayId: 19,
        todayPlan: [
          { exId: 1, reps: 20 },
          { exId: 2, reps: 25 },
          { exId: 3, reps: 25 },
          { exId: 4, reps: 20 },
          { exId: 5, reps: 25 }
        ]
      },
      {
        dayId: 20,
        todayPlan: [
          { exId: 1, reps: 20 },
          { exId: 2, reps: 25 },
          { exId: 3, reps: 25 },
          { exId: 4, reps: 20 },
          { exId: 5, reps: 25 }
        ]
      },
      {
        dayId: 21,
        todayPlan: [
          { exId: 1, reps: 20 },
          { exId: 2, reps: 30 },
          { exId: 3, reps: 30 },
          { exId: 4, reps: 20 },
          { exId: 5, reps: 25 }
        ]
      },
      {
        dayId: 22,
        todayPlan: [
          { exId: 1, reps: 20 },
          { exId: 2, reps: 30 },
          { exId: 3, reps: 30 },
          { exId: 4, reps: 20 },
          { exId: 5, reps: 25 }
        ]
      },
      {
        dayId: 23,
        todayPlan: [
          { exId: 1, reps: 25 },
          { exId: 2, reps: 30 },
          { exId: 3, reps: 30 },
          { exId: 4, reps: 25 },
          { exId: 5, reps: 25 }
        ]
      },
      {
        dayId: 24,
        todayPlan: [
          { exId: 1, reps: 25 },
          { exId: 2, reps: 30 },
          { exId: 3, reps: 30 },
          { exId: 4, reps: 25 },
          { exId: 5, reps: 25 }
        ]
      },
      {
        dayId: 25,
        todayPlan: [
          { exId: 1, reps: 25 },
          { exId: 2, reps: 30 },
          { exId: 3, reps: 30 },
          { exId: 4, reps: 25 },
          { exId: 5, reps: 25 }
        ]
      },
      {
        dayId: 26,
        todayPlan: [
          { exId: 1, reps: 25 },
          { exId: 2, reps: 35 },
          { exId: 3, reps: 35 },
          { exId: 4, reps: 25 },
          { exId: 5, reps: 25 }
        ]
      },
      {
        dayId: 27,
        todayPlan: [
          { exId: 1, reps: 25 },
          { exId: 2, reps: 35 },
          { exId: 3, reps: 35 },
          { exId: 4, reps: 25 },
          { exId: 5, reps: 25 }
        ]
      },
      {
        dayId: 28,
        todayPlan: [
          { exId: 1, reps: 30 },
          { exId: 2, reps: 35 },
          { exId: 3, reps: 35 },
          { exId: 4, reps: 30 },
          { exId: 5, reps: 30 }
        ]
      },
      {
        dayId: 29,
        todayPlan: [
          { exId: 1, reps: 30 },
          { exId: 2, reps: 35 },
          { exId: 3, reps: 35 },
          { exId: 4, reps: 30 },
          { exId: 5, reps: 30 }
        ]
      },
      {
        dayId: 30,
        todayPlan: [
          { exId: 1, reps: 30 },
          { exId: 2, reps: 35 },
          { exId: 3, reps: 35 },
          { exId: 4, reps: 30 },
          { exId: 5, reps: 30 }
        ]
      },
    ],
    exercisesList: [
      {
        exId: 1,
        name: "Push-ups",
        desc: "Lie flat on your stomach. Place your palms flat on the ground at shoulder height, a little wider than your shoulder width. Keep your body upright. Raise your body up straightening your arms while still keeping your body upright.",
        repeatMode: true,
        duration: 3
      },
      {
        exId: 2,
        name: "Sit-ups",
        desc: "Lie down, bend your knees, put your feet hip-width apart, clasp your hands behind your head and keep your elbows apart. Using your abdominal muscles, lift your torso up. Remember not to bring your chin too close to your chest.",
        repeatMode: true,
        duration: 4
      },
      {
        exId: 3,
        name: "Squats",
        desc: "Stand straight while slightly straddling. The head should be straight. Look ahead. Keep your hands straight in front of you. Slowly start bending your knees while pushing your hips backward. Come back to the starting position by straightening your knees.",
        repeatMode: true,
        duration: 4
      },
      {
        exId: 4,
        name: "Plank",
        desc: "Take the push-up position, except that the forearms are placed vertically on the ground. Raise your torso and try to keep it in a vertical line and keep this position.",
        repeatMode: false,
        duration: 1
      },
      {
        exId: 5,
        name: "Lunges",
        desc: "Stand straight with your feet shoulder-width apart. Keep your back straight, hands loose. Lunge with your right foot until your thigh is parallel to the ground. Return to the starting position and repeat the movement with the other leg.",
        repeatMode: true,
        duration: 5
      }
    ]
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;      
  }
};