export async function fetchGoal() {
    const goalProgress = await fetch('http://localhost:8080/goal/');
    return goalProgress.json();
}