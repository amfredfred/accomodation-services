export default function Heading() {
    return (
        <div className="heading space-between">
            <a
                className="h2-headline uppercase"
                rel="stylesheet" href={window.location.protocol}
                children='HOME'
            />
        </div>
    )
}