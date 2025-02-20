const { createClient } = supabase;

setTimeout(async () => {

    const supabase = createClient('https://yadhdsukjpqsjpzytlyr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhZGhkc3VranBxc2pwenl0bHlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyODA3NzgsImV4cCI6MjA1NDg1Njc3OH0.PyEW_wo76fCOkIYRR9v1prhMUi-TBugU79xIbXq66ow')
    
    const { data, error } = await supabase
        .from('user')
        .select()

    if (error) {
    console.log('supabase error:', error)
    } else {
    console.log('data:', data)
    }

}, 1);

export async function addData() {

    const { error } = await supabase
    .from('user')
    .insert({ 
        email: 'test@email.com', 
        password: '123abc' ,
        date: '2024-12-10'
    })


}