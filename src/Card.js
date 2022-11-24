
export const Card = ({imageUrl }) => {
    return (
        <div class="w-full rounded overflow-hidden shadow-lg m-2">
            <img class="w-full h-64 object-center px-4 py-6" src={imageUrl} alt ="" />

        </div>
    );
}