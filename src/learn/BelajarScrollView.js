import { StyleSheet, View, Text, ScrollView } from 'react-native'
import React from 'react'

const BelajarScrollView = () => {
  return (
    <View style={styles.container}>
        <ScrollView
            vertical={true}
            showsVerticalScrollIndicator={false}
        >
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab dolore accusantium harum similique magni sit libero quasi odit! Dicta, in iusto. Illum sint, laborum tenetur et molestias necessitatibus nostrum sapiente asperiores provident eligendi doloribus ad aspernatur, nulla cupiditate corporis iure eos enim cumque odio repellendus, nobis voluptatibus natus! Quasi, voluptas consequatur. Expedita corporis quis accusantium deserunt reiciendis et iure voluptatem, quae aspernatur officia corrupti error ipsa provident tempora tempore eius numquam odio, libero soluta iusto? Vel aspernatur eum magnam provident quod a esse quaerat corrupti veniam? Delectus iste assumenda ratione, porro beatae dolore temporibus excepturi ab aliquid maiores dolor quis nam cum quasi nobis, magni sequi, et tempora voluptate corrupti obcaecati. Facilis dolorem inventore commodi culpa voluptatibus. Nesciunt quidem adipisci doloribus nihil libero modi dignissimos itaque vitae iste ipsum in eligendi explicabo corrupti, consectetur saepe. Ipsa autem, ad doloribus repellat, officia hic quidem vero optio nihil sapiente commodi, beatae accusantium? Quia, quos. Non molestiae totam nulla. Facilis repellat quasi corrupti illo assumenda voluptate voluptatum nam ipsum quis, repellendus autem in rem fugiat praesentium ex ratione eius placeat aut quos fugit dignissimos tempore blanditiis! Quaerat praesentium iste excepturi nobis tempore voluptas iusto autem eaque. Sint voluptatibus corrupti excepturi. Nulla, doloremque.</Text>
            <Text style={styles.pt20}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab dolore accusantium harum similique magni sit libero quasi odit! Dicta, in iusto. Illum sint, laborum tenetur et molestias necessitatibus nostrum sapiente asperiores provident eligendi doloribus ad aspernatur, nulla cupiditate corporis iure eos enim cumque odio repellendus, nobis voluptatibus natus! Quasi, voluptas consequatur. Expedita corporis quis accusantium deserunt reiciendis et iure voluptatem, quae aspernatur officia corrupti error ipsa provident tempora tempore eius numquam odio, libero soluta iusto? Vel aspernatur eum magnam provident quod a esse quaerat corrupti veniam? Delectus iste assumenda ratione, porro beatae dolore temporibus excepturi ab aliquid maiores dolor quis nam cum quasi nobis, magni sequi, et tempora voluptate corrupti obcaecati. Facilis dolorem inventore commodi culpa voluptatibus. Nesciunt quidem adipisci doloribus nihil libero modi dignissimos itaque vitae iste ipsum in eligendi explicabo corrupti, consectetur saepe. Ipsa autem, ad doloribus repellat, officia hic quidem vero optio nihil sapiente commodi, beatae accusantium? Quia, quos. Non molestiae totam nulla. Facilis repellat quasi corrupti illo assumenda voluptate voluptatum nam ipsum quis, repellendus autem in rem fugiat praesentium ex ratione eius placeat aut quos fugit dignissimos tempore blanditiis! Quaerat praesentium iste excepturi nobis tempore voluptas iusto autem eaque. Sint voluptatibus corrupti excepturi. Nulla, doloremque.</Text>
            <Text style={styles.pt20}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab dolore accusantium harum similique magni sit libero quasi odit! Dicta, in iusto. Illum sint, laborum tenetur et molestias necessitatibus nostrum sapiente asperiores provident eligendi doloribus ad aspernatur, nulla cupiditate corporis iure eos enim cumque odio repellendus, nobis voluptatibus natus! Quasi, voluptas consequatur. Expedita corporis quis accusantium deserunt reiciendis et iure voluptatem, quae aspernatur officia corrupti error ipsa provident tempora tempore eius numquam odio, libero soluta iusto? Vel aspernatur eum magnam provident quod a esse quaerat corrupti veniam? Delectus iste assumenda ratione, porro beatae dolore temporibus excepturi ab aliquid maiores dolor quis nam cum quasi nobis, magni sequi, et tempora voluptate corrupti obcaecati. Facilis dolorem inventore commodi culpa voluptatibus. Nesciunt quidem adipisci doloribus nihil libero modi dignissimos itaque vitae iste ipsum in eligendi explicabo corrupti, consectetur saepe. Ipsa autem, ad doloribus repellat, officia hic quidem vero optio nihil sapiente commodi, beatae accusantium? Quia, quos. Non molestiae totam nulla. Facilis repellat quasi corrupti illo assumenda voluptate voluptatum nam ipsum quis, repellendus autem in rem fugiat praesentium ex ratione eius placeat aut quos fugit dignissimos tempore blanditiis! Quaerat praesentium iste excepturi nobis tempore voluptas iusto autem eaque. Sint voluptatibus corrupti excepturi. Nulla, doloremque.</Text>
        </ScrollView>
    </View>
  )
}

export default BelajarScrollView

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20,
    },
    pt20: {
        paddingTop:20,
    }
})